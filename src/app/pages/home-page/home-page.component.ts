import {Component, OnDestroy, OnInit} from '@angular/core';
import {MqttService} from '../../services/mqtt.service';
import {Subject} from 'rxjs';
import * as zoomJS from 'pinch-zoom-js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  map = null;
  // direction1 = 1; // 上半段的 方向：1为上山，-1为下山
  hourHand1 = 1; // 上半段的 时针：1顺时针，-1逆时针
  hourHand2 = 1; // 下半段的 时针：1顺时针，-1逆时针
  timerList = [];
  hourHand1Change = new Subject();
  hourHand2Change = new Subject();
  scale = 1;
  originX = '0';
  originY = '0';
  scrollTop = 0;
  scrollLeft = 0;
  moveX = 0;
  moveY = 0;
  top = 0;
  left = 0;
  isMoving = false;
  video;
  touches = [];
  distance = 0;
  constructor(private mqttService: MqttService) { }

  ngOnInit() {
    this.video = document.getElementById('cableVideo');
    new zoomJS.default(this.video);
    // this.video = document.getElementById('cableVideo');
    // let count = 1;
    this.mqttService.dataChange.subscribe(() => {
      if (this.mqttService.dataDictionary['首页左侧拉出'] && this.mqttService.dataDictionary['首页左侧拉出']['上站正向']) {
        const h = this.hourHand1;
        this.hourHand1 = this.mqttService.dataDictionary['首页左侧拉出']['上站正向'].value ? 1 : -1;
        if (h != this.hourHand1) this.hourHand1Change.next();
      }
      if (this.mqttService.dataDictionary['首页左侧拉出'] && this.mqttService.dataDictionary['首页左侧拉出']['中站正向']) {
        const h = this.hourHand2;
        this.hourHand2 = this.mqttService.dataDictionary['首页左侧拉出']['中站正向'].value ? 1 : -1;
        if (h != this.hourHand2) this.hourHand2Change.next();
      }
      if (this.mqttService.dataDictionary['首页左侧拉出'] && this.mqttService.dataDictionary['首页左侧拉出']['上站运行速度']
          && this.mqttService.dataDictionary['首页左侧拉出']['上站运行速度'].value === 0) {
        this.stop();
      }
      if (this.mqttService.dataDictionary['首页左侧拉出'] && this.mqttService.dataDictionary['首页左侧拉出']['上站运行速度']
          && this.mqttService.dataDictionary['首页左侧拉出']['上站运行速度'].value !== 0) {
        this.play();
      }
      /*if (count === 1) {
        [[71.75,216.25],[143.5, 234.25],[222,266.95],[284, 302.25],[353,341.375]].forEach((item, index)=>{
          this.cableCarMovement2(LL.marker(xy(item[0], item[1]), {icon: cableCarIcon}).addTo(this.map), latlngs4, latlngs3, latlngs6, latlngs5, this.hourHand2, index>=2?'k1':'k2');
          // LL.marker(xy(item[0], item[1]), {icon: cableCarIcon}).addTo(this.map)
        });
        [[72, 212.4375],[143.65625, 230.71875],[222.15625, 264.3125],[284.15625, 299.40625],[353.09375, 338.4375]].forEach((item, index)=>{
          this.cableCarMovement2(LL.marker(xy(item[0], item[1]), {icon: cableCarIcon}).addTo(this.map),  latlngs4, latlngs3, latlngs6, latlngs5, -this.hourHand2, index>=2?'k1':'k2');
        });
        [[425.5, 355.25],[539.5, 373.75],[649.75, 391.75],[773, 411],[891, 430.25]].forEach((item, index)=>{
          this.cableCarMovement1(LL.marker(xy(item[0], item[1]), {icon: cableCarIcon}).addTo(this.map), latlngs1, latlngs2, this.hourHand1);
          // LL.marker(xy(item[0], item[1]), {icon: cableCarIcon}).addTo(this.map)
        });
        [[425.375, 350.625],[539.625, 369.1875],[649.8125, 387.1875],[773, 407.125],[891.625, 426.5]].forEach((item, index)=>{
          this.cableCarMovement1(LL.marker(xy(item[0], item[1]), {icon: cableCarIcon}).addTo(this.map), latlngs1, latlngs2, -this.hourHand1);
          // LL.marker(xy(item[0], item[1]), {icon: cableCarIcon}).addTo(this.map)
        });
      }
      count++;*/
    });
   /*  // @ts-ignore
    const LL = L;
    const yx = LL.latLng;
    const xy = (x, y) => {
      if (LL.Util.isArray(x)) {    // When doing xy([x, y]);
        return yx(x[1], x[0]);
      }
      return yx(y, x);  // When doing xy(x, y);
    };
    this.map = LL.map('map', {
      minZoom: 1,
      maxZoom: 20,
      zoom: 1,
      crs: LL.CRS.Simple,
      bounceAtZoomLimits: false,
    });
    const imageBounds = [[0, 0], [2560 / 4 / 1920 * 1864, 3840 / 4 / 1920 * 1864]];
    LL.imageOverlay(`./../../../assets/images/homePage1.png`, imageBounds).addTo(this.map);
    // LL.marker(xy(932, 30.5), ).addTo(this.map);
    this.map.fitBounds(imageBounds);
    this.map.setMaxBounds(imageBounds);
    /!*
    * 420.3125 349.84375
      418.0625 353.9375
      910.3125 429.53125
      905.9375 432.46875
         *
         *
359.78125 347.4375
363.71875 344.53125
          * 171.5 235.8125
           174.375 240.0625
           *
           * 163.25 235.875
            166.40625 240.0625
            *59.71875 213.0625
            53.71875 207.6875
      * #3F5DDC*!/
    const  latlngs1 = [
      xy(905.9375, 432.46875),
      xy(418.0625, 353.9375),
    ];
    const  latlngs2 = [
      xy(910.3125, 429.53125),
      xy(420.3125, 349.84375),
    ];
    const  latlngs3 = [
      xy(363.71875, 344.53125),
      xy(171.5, 235.8125),
    ];
    const  latlngs4 = [
      xy(362.65625, 346.75),
      xy(174.375, 240.0625),
    ];
    const  latlngs5 = [
      xy(163.25, 235.875),
      xy(53.71875, 207.6875),
    ];
    const  latlngs6 = [
      xy(166.40625, 240.0625),
      xy(59.71875, 213.0625),
    ];
    const polyline1 = LL.polyline(latlngs1, {color: '#D7D9DF'}).addTo(this.map);  // 右上
    const polyline2 = LL.polyline(latlngs2, {color: '#D7D9DF'}).addTo(this.map);  // 右下
    const polyline3 = LL.polyline(latlngs3, {color: '#D7D9DF'}).addTo(this.map);  // 中下
    const polyline4 = LL.polyline(latlngs4, {color: '#D7D9DF'}).addTo(this.map);  // 中上
    const polyline5 = LL.polyline(latlngs5, {color: '#D7D9DF'}).addTo(this.map);  // 左下
    const polyline6 = LL.polyline(latlngs6, {color: '#D7D9DF'}).addTo(this.map);  // 左上

    const cableCarIcon = LL.icon({
      iconUrl: './../../../assets/images/cableCar.png',
      iconSize: [20, 50],
      iconAnchor: [10, 0],
    });
 /!*   let i = 1;
    const timer = setInterval(() => {
      if (i++ > 20) {
        clearInterval(timer);
      }
      this.cableCarMovement1(LL.marker(xy(417.9375, 354), {icon: cableCarIcon}).addTo(this.map), latlngs1, latlngs2, 1);
      this.cableCarMovement2(LL.marker(xy(363.8125, 344.5625), {icon: cableCarIcon}).addTo(this.map), latlngs4, latlngs3, latlngs6, latlngs5, -1);
    }, 0);*!/



    this.map.on('click', (ev) => {
      console.log(ev.latlng.lng, ev.latlng.lat); // x,y
    });*/
  }
  // lat纵坐标，lng横坐标
  cableCarMovement1(marker, top, bottom, direction) {
    marker.opacity = 1;
    const k1 = Math.abs((top[0].lat - top[1].lat) / (top[0].lng - top[1].lng));
    const k2 = Math.abs((bottom[0].lat - bottom[1].lat) / (bottom[0].lng - bottom[1].lng));
    let k = k1;
    let lnglatLine = JSON.parse(JSON.stringify(top));
    if (direction * this.hourHand1 > 0) { // 上边那条线
      lnglatLine = JSON.parse(JSON.stringify(top));
    } else { // 下边那条线
      lnglatLine = JSON.parse(JSON.stringify(bottom));
    }
    this.hourHand1Change.subscribe(() => {
      direction *= -1;
    });
    const timer = setInterval(() => {
        if (direction * this.hourHand1 > 0) { // 上边那条线
            k = k1;
            lnglatLine = JSON.parse(JSON.stringify(top));
        } else { // 下边那条线
            k = k2;
            lnglatLine = JSON.parse(JSON.stringify(bottom));
        }
        const latlng = marker.getLatLng();
        let speed = 4;
        if (this.mqttService.dataDictionary['首页左侧拉出'] && this.mqttService.dataDictionary['首页左侧拉出']['上站运行速度']
         && this.mqttService.dataDictionary['首页左侧拉出']['上站运行速度'].value === 0) {
          speed = 0;
        }
        latlng.lng = latlng.lng + speed * direction;
        latlng.lat = latlng.lat + speed * k * direction;
        marker.setLatLng(JSON.parse(JSON.stringify(((latlng)))));

        if (/*this.hourHand1 > 0 && */marker.opacity === 1 && (latlng.lat < lnglatLine[1].lat || latlng.lat > lnglatLine[0].lat)) {
          marker.setOpacity(0);
          marker.opacity = 0;
          setTimeout(() => {
            if (this.mqttService.dataDictionary['首页左侧拉出'] && this.mqttService.dataDictionary['首页左侧拉出']['上站运行速度']
                && this.mqttService.dataDictionary['首页左侧拉出']['上站运行速度'].value !== 0)  {
              direction *= -1;
              marker.setOpacity(1);
              marker.opacity = 1;
              let markerLngLat = null;
              if (direction * this.hourHand1 > 0) { // 上边那条线
                k = k1;
                lnglatLine = JSON.parse(JSON.stringify(top));
              } else { // 下边那条线
                k = k2;
                lnglatLine = JSON.parse(JSON.stringify(bottom));
              }
              if (direction > 0) {
                markerLngLat = JSON.parse(JSON.stringify(lnglatLine[1]));
              } else {
                markerLngLat = JSON.parse(JSON.stringify(lnglatLine[0]));
              }
              marker.setLatLng(JSON.parse(JSON.stringify(markerLngLat)));
            }
          }, 3000);
        } else {
          // marker.setOpacity(1);
          // marker.opacity = 1;
        }
        }, 100);
    this.timerList.push(timer);
  }

  cableCarMovement2(marker, top1, bottom1, top2, bottom2, direction, initK) {
    marker.opacity = 1;
    const k1 = Math.abs((top1[0].lat - top1[1].lat) / (top1[0].lng - top1[1].lng));
    const k2 = Math.abs((top2[0].lat - top2[1].lat) / (top2[0].lng - top2[1].lng));
    let k = initK === 'k1' ? k1 : k2;
    const top = [top1[0], top2[1]];
    const bottom = [bottom1[0], bottom2[1]];
    let lnglatLine = JSON.parse(JSON.stringify(top));
    if (direction * this.hourHand2 > 0) { // 上边那条线
      lnglatLine = JSON.parse(JSON.stringify(top));
    } else { // 下边那条线
      lnglatLine = JSON.parse(JSON.stringify(bottom));
    }
    this.hourHand2Change.subscribe(() => {
      direction *= -1;
    });
    const timer = setInterval(() => {
      if (direction * this.hourHand2 > 0) { // 上边那条线
        lnglatLine = JSON.parse(JSON.stringify(top));
      } else { // 下边那条线
        lnglatLine = JSON.parse(JSON.stringify(bottom));
      }
      const latlng = marker.getLatLng();
      if (this.hourHand2 * direction > 0 && latlng.lng < top1[1].lng && latlng.lng > top2[0].lng) {
          if (direction > 0) {
            k = k1;
            latlng.lng = latlng.lng + (top1[1].lng - top2[0].lng);
          } else {
            k = k2;
            latlng.lng = latlng.lng - (top1[1].lng - top2[0].lng);
          }
      } else if (this.hourHand2 * direction < 0 && latlng.lng < bottom1[1].lng && latlng.lng > bottom2[0].lng) {
          if (direction > 0) {
            k = k1;
            latlng.lng = latlng.lng + (bottom1[1].lng - bottom2[0].lng);
          } else {
            k = k2;
            latlng.lng = latlng.lng - (bottom1[1].lng - bottom2[0].lng);
          }
      }
      let speed = 2;
      if (this.mqttService.dataDictionary['首页左侧拉出'] && this.mqttService.dataDictionary['首页左侧拉出']['中站运行速度']
          && this.mqttService.dataDictionary['首页左侧拉出']['中站运行速度'].value === 0) {
        speed = 0;
      }
      latlng.lng = latlng.lng + speed * direction;
      latlng.lat = latlng.lat + speed * k * direction;
      marker.setLatLng(JSON.parse(JSON.stringify(((latlng)))));

      if (marker.opacity === 1 && (latlng.lat < lnglatLine[1].lat || latlng.lat > lnglatLine[0].lat)) {
        direction *= -1;
        marker.setOpacity(0);
        marker.opacity = 0;
        setTimeout(() => {
          marker.setOpacity(1);
          marker.opacity = 1;
          let markerLngLat = null;
          if (direction * this.hourHand2 > 0) { // 上边那条线
            k = direction > 0 ? k2 : k1;
            lnglatLine = JSON.parse(JSON.stringify(top));
          } else { // 下边那条线
            k = direction > 0 ? k2 : k1;
            lnglatLine = JSON.parse(JSON.stringify(bottom));
          }
          if (direction > 0) {
            markerLngLat = JSON.parse(JSON.stringify(lnglatLine[1]));
          } else {
            markerLngLat = JSON.parse(JSON.stringify(lnglatLine[0]));
          }
          marker.setLatLng(JSON.parse(JSON.stringify(markerLngLat)));
        }, 3000);
      }
    }, 100);
    this.timerList.push(timer);
  }

  ngOnDestroy(): void {
    /*this.timerList.forEach(item => {
      clearInterval(item);
    });*/
  }

  onScroll(e) {
    // wheelDelta 往上滚是正，放大
    // e.wheelDelta > 0 ? this.scale += 0.1 : this.scale -= 0.1;
    if (this.scale < 1) this.scale = 1;
    if (this.scale > 2) this.scale = 2;
    this.zoom(e.wheelDelta );
    this.originX = e.offsetX + 'px';
    this.originY = e.offsetY + 'px';
    console.log(e)
  }

  zoom(count) {
    count > 0 ? this.scale += 0.05 : this.scale -= 0.05;
    if (this.scale < 1) this.scale = 1;
    if (this.scale > 2) this.scale = 2;
    this.originX = '50%';
    this.originY = '50%';
  }
  onMousedown(e) {
    e.preventDefault();
    this.moveX = e.offsetX;
    this.moveY = e.offsetY;
    this.isMoving = true;
  }

  onMousemove(e) {
    e.preventDefault();
    if (this.isMoving) {
      console.log('move',e)
      const x = Number(e.offsetX) - Number(this.moveX);
      const y = Number(e.offsetY) - Number(this.moveY);
      this.top += y;
      this.left += x;
      this.moveX = e.offsetX;
      this.moveY = e.offsetY;
      console.log(this.top,this.left,x,y)
    }
  }
  onMouseup(e) {
    e.preventDefault();
    this.isMoving = false;
  }

  play() {
    this.video.play();
  }
  stop() {
    this.video.pause();
  }

  touchStart(e) {
    this.distance = 0;
    this.touches = e.touches;
    e.preventDefault();
    e.stopPropagation();
  }
  touchmove(e) {
    console.log(e)
    e.preventDefault();
    e.stopPropagation();
    if (this.touches.length === 2 && e.touches.length === 2) {
      const nowDistance = this.getDistance(e.touches[0], e.touches[1]);
         this.zoom(nowDistance - this.distance);
      this.distance = nowDistance;
    }
    /*if (this.touches.length === 1) {
      console.log(e)
      this.moveX = e.offsetX;
      this.moveY = e.offsetY;
    }*/
  }

  getDistance(p1, p2) {
    const x = p2.pageX - p1.pageX,
        y = p2.pageY - p1.pageY;
    return Math.sqrt((x * x) + (y * y));
  };

}
