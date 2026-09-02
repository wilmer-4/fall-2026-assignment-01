
type UserAccount = {
  id: string;
  createdAt: Date;
  email: string;
  passwordHash: string
  profile: {
    bio: string
    avatarUrl: string
  };
}; //create the user account

export class UserRegistry {
  private records: UserAccount[] = [] //store records
  public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    
    
      const id = String(Math.random()); //created unique id, maybe better way to do this?
      const createdAt = new Date(); //date of creation

      const userAccount = {
        id,
        createdAt,
        ...data
      }; //user account

      this.records.push(userAccount); //add to record

       return userAccount
    }
  

  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    for (const records of this.records){
      if (records.id === id) // search
      return Object.freeze({ //had to add object.freeze to pass the unit test.
        id: records.id,
        email: records.email,
        profile: records.profile,
           })
    }
    return undefined;
  }
}
