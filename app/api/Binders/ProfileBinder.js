export default class ProfileBinder {
  bind(input) {
    try {
      const result = input.result
      const user = input.data
      const id = user.id
      const fname = user.firstname
      const lname = user.lastname
      const avatar = user.avatar
      const about = user.about
      const indexRange = user.index_range
      const ageRange = user.age_range
      const showGG = user.show_gg
      const interest = user.interest.map(i => {
        return {
          id: i.interestId,
          name: i.name
        }
      })

      if (result === true) {
        return { 
          result,
          user: {
            firstName: fname,
            lastName: lname,
            avatar,
            about,
            interest
          },
          settings: {
            indexRange,
            ageRange,
            showGG
          }
        }
      }
      else {
        return { 
          result: false
        }
      }
    }
    catch {
      return {
        result: false
      }
    }
  }
}