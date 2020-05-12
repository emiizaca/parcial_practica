export default class userId {
    constructor(){
      this._usersId = [];
    }

    getUsersId() { return this._usersId}

    addUserId(user) {
      if(!this._usersId.includes(this._usersId.find(u => u.nombre === user.userId))){
        const userId = {"id":this._usersId.length+1, "nombre": user.userId}
        this._usersId.push(userId)
      } 
      return this
    }
}