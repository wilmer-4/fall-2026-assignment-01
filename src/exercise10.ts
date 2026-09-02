
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
  private records: UserAccount[] = []
  public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    
    
      const id = String(Math.random());
      const createdAt = new Date();

      const userAccount = {
        id,
        createdAt,
        ...data
      };

      this.records.push(userAccount);

       return userAccount
    }
  

  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    for (const records of this.records){
      if (records.id === id)
      return Object.freeze({
        id: records.id,
        email: records.email,
        profile: records.profile,
           })
    }
    return undefined;
  }
}
