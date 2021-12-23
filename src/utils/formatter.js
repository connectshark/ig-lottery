const formatter = {
  comments (arr) {
    return arr.map(item => {
      return {
        name: item.username,
        id: item.id,
        content: item.text
      }
    })
  }
}

export default formatter