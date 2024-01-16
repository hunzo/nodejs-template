const api = require("./Api")

module.exports = {
  getUser() {
    return api().get("/users", {
      payload: "test_on_getuser",
    })
  },
}
