export interface IRentalInfo {
  MGMT_NM: string;
  CNT: string;
  GB: string;
  LOCATE: string;
}

export interface IRentalListResponse {
  data: {
    response: {
      header: {
        resultCode: string;
        resultMsg: string;
      };
      body: {
        pageNo: number;
        dataType: string;
        totalCount: string;
        numOfRows: number;
        items: { item: Array<IRentalInfo> };
      };
    };
  };
}
