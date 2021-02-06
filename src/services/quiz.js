import axios from 'axios'


const categoriesUrl = 'https://opentdb.com/api_category.php'
const tokenUrl = 'https://opentdb.com/api_token.php?command=request'
const resetUrl = 'https://opentdb.com/api_token.php?command=reset&token='




export const getToken = async () => {
  let res = await axios.get(tokenUrl)
  let data = res.data;
  return data
}

export const resetToken = async token => {
  let res = await axios.get(`${resetUrl}${token}`)
  let data = res.data
  return data
}


export const getCategories = async () => {
    let res = await axios.get(categoriesUrl)
    let data = res.data
    return data
}

export const getQuestions = async (id,difficulty,token) => {
  let questionsUrl = `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficulty}&token=${token}`
  let res = await axios.get(questionsUrl)
  return res.data
}


