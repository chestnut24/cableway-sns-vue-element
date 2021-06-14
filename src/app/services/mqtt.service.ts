import { Injectable } from '@angular/core';
import dataDictionary from './../public/data-dictionary';
import {Subject} from 'rxjs';
declare var mqtt: any;
@Injectable({
  providedIn: 'root'
})
export class MqttService {
  public client = null;
  public dataChange = new Subject();
  public dataDictionary = {};
  constructor() {
    let bool = true;
    // setInterval(() => {
    //   bool = !bool;
    //   this.client.publish('iotgateway/write', `[{"id":"SNS.SZ.SZXXZT.SZJJTC.SDXYJT", "v":${bool}}]`);
    // },2000);
  }

  init() {
    const options = {
      // keepalive: 'keepalive',
      reconnectPeriod: 10000,
      // clientId: 'xiaolong',
      // username: 'hailing',
      // password: '123456'
      username: 'admin',
      password: 'password',
      // username: '超级管理员',
      // password: 'sysadmin',
      // qos: 1
    };
    // this.client = mqtt.connect('ws://49.232.82.120:1884', options);
    // this.client = mqtt.connect('ws://192.168.60.28:1884', options);
    // this.client = mqtt.connect('ws://192.168.18.150:1884', options);
    // this.client = mqtt.connect('ws://172.27.149.24:1884', options);
    // this.client = mqtt.connect('ws://192.168.60.28:1884', options);
    this.client = mqtt.connect('ws://192.168.18.150:1884', options);
    // this.client = mqtt.connect('ws://192.168.18.131:1884', options);
    this.client.subscribe('final_iotgateway');
    // this.client.subscribe('presence');

    this.client.on('message', (topic, payload) => {
      // console.log(JSON.parse([topic, payload].join(': ')).values.length);
      // console.log(JSON.parse([payload].join('')));
      const data = JSON.parse([payload].join('')).values;
      const obj = {};
      if (data && data.length) {
        data.forEach(item => {
          obj[item.id] = {q: item.q, v: typeof item.v === 'number' ? Number(item.v.toFixed(2)) : item.v, t: item.t};
        });
        Object.values(dataDictionary).forEach(data1 => {
          Object.keys(data1).forEach(key => {
            if (obj[data1[key].key]) {
              data1[key].value = obj[data1[key].key].v;
            }
          });
        });
        this.dataDictionary = dataDictionary;
        console.log(this.dataDictionary);
        this.dataChange.next(this.dataDictionary);
      }
      // console.log([payload].join(''));
      // this.client.end();
    });

  }

  publish(key, value) {
    this.client.publish('iotgateway/write', `[{"id":"${key}", "v":${value}}]`);
    console.log(`[{"id":"${key}", "v":${value}}]`)
  }
}
