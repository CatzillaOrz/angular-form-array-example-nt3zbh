export interface laformGroup {
  key?: string;
  label?: string;
  disable?: boolean;
  controler: laformControler[];
}

export interface laformControler {
  key?: string;
  value?: any;
  type: laformType;
}

export interface laformType {
  type?: 'input' | 'checkbox' | 'password' | 'select' | 'button';
}
