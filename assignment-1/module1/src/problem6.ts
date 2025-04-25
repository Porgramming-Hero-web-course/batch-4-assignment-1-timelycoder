{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const updateProfile = (
    profileObj: Profile,
    partialUpdated: Partial<Profile>
  ): Profile => {
    return { ...profileObj, ...partialUpdated };
  };
}
