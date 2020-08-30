//model class for doctor info
//days optional
export class docInfo {
    name: string;
    org: string;
    availibility: {
      sun?: string;
      mon?: string;
      tue?: string;
      wed?: string;
      thu?: string;
      fri?: string;
      sat?: string;
    };
    visitDurationInMin:number;
};

