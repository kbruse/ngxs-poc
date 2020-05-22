export class SetUsername {
  static readonly type = '[app] Set username';
  constructor(public payload: string) {}
}

export class SetUserRole {
  static readonly type = '[app] Set user role';
  constructor() {}
}

export class SetUserMember {
  static readonly type = '[app] Set user member';
  constructor() {}
}

export class SetUserGuest {
  static readonly type = '[app] Set user guest';
  constructor() {}
}

