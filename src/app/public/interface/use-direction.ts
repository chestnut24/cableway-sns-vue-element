export interface UseDirection {
    code: number;
    success: boolean;
    msg: string;
    data: FileData[];
}

export interface FileData {
    id: number;
    fileName: string;
    remark: string;
    createdDt: string;
    createdBy: string;
    updatedDt: string;
    updatedBy: string;
    isDeleted: boolean;
    fileUrl: string;
}

