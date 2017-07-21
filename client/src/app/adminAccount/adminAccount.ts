

export class AdminAccount {
  id: number;

  password: string;
  username: string;
  accountLocked: boolean;
  accountExpired: boolean;
  passwordExpired: boolean;
  enabled: boolean;

  constructor (object?: any) {
    if (object) {
      
      for (var prop in object) {
        this[prop] = object[prop];
      }
    }

  }

  toString(): string {
    return 'asti.recruitment.AdminAccount : ' + (this.id ? this.id : '(unsaved)');
  }
}