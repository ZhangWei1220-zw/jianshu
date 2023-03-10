import { fromJS } from "immutable";
import * as actionTypes from './actionTypes'
import dailyPic from '../../../statics/banner-s-daily.png'
import clubPic from '../../../statics/banner-s-club.png'
import goodPic from '../../../statics/banner-s-7.png'
import safePic from '../../../statics/banner-s.png'


const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [{
    id: 1,
    imgUrl: dailyPic
  }, {
    id: 2,
    imgUrl: clubPic
  }, {
    id: 3,
    imgUrl: goodPic
  }, {
    id: 4,
    imgUrl: safePic
  }],
  writeItem: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    writeItem: fromJS(action.writeItem)
  })
}

const addArticleList = (state, action) => {
  state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case actionTypes.ADD_HOME_LIST:
      return addArticleList(state, action)
    case actionTypes.CHANGE_SCROLL_SHOW:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}