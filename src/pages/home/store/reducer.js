import { fromJS } from "immutable";
import dailyPic from '../../../statics/banner-s-daily.png'
import clubPic from '../../../statics/banner-s-club.png'
import goodPic from '../../../statics/banner-s-7.png'
import safePic from '../../../statics/banner-s.png'


const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgSFRUVGBgaGBgZGBkYGBIYGBgYGRoaGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHDQhIR00NDQxMTE0NDQ0MTExNDE0MTQ0NDE0MTUxMT80MTQ/MTQ0MTQxPzQ0MTQxNDQxNDQxMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIGBwMEBQj/xAA7EAABAwEEBggEBAcBAQAAAAABAAIRAwQFEiEGMUFRYXEHEyKBkaGxwTLR4fBCUnKyFBUjM2KC8ZKi/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAeEQEBAQEAAwEAAwAAAAAAAAAAAQIREiExQQMyYf/aAAwDAQACEQMRAD8AttCEIMNprhjHPdqAleftO79Naq6DkCQOe1Wn0jXx1VHqwcyPM6vmvP8Aa62N5KDExZExoT0AhCEAhCEAhCEAhCEAhCEAhCEAhCECJUiECpChCBpKnvR3e5p1W57vqoG5b9yWrBUaeKD1Mx4IBGoiQnLjaK20VbOwzmBHy++C7IQCEIQCa94aC45AAk8gnFRvTe8eqs5APadl3DMnkgqbpGvnrargDkCfvwUCatu9a5e8k71qsQPASpEqAQhCAQhIgVCEIBCEiBUIQgRKkSoBCRKgRKhIgEIQgRyKTocClKYUF69F1vxMNMnWJ9/cqxFSXRjbcNRoJ2x9/wDpXYjSoQhGEVVdJV4F2ITl8Df06ye/5K0KhnLZt+So/pEtRLyJ/MfE/RBXtUy4pWpgWQBAJUJECoSIQKkQhA+nTLjATq1nczXz8U2i6HBS112ddQDmiXAZcRrjzRsnUPQn1qZaYKYjCoSIQKkQhAJUiEAhCEAlSIQBTSE5NcglehNpw1W8/v2XoizvxMa7eAfELzJo1Vw1W/qHqvSNyPxUGH/GPDJBvIQhBgqHAxxOxpJ5xvXnbTa1Yqz+ceC9A37Uw0HnhHivNGkFXFUcd7ifNBzWp4WNiyIFQ1smELJZmS4IOh/LP6eOOPcuW8QYVm2O6C+z6vwR3wq5vClheUVqca6RKgokjSp9oVag4dWd3ofkR4KArt6PWs03hwO36H18llVm8qTaZaMkTVY3Xm4D9w91AHsLTBVvOY+0sAdWeBEQ3CPOJUOvzRZ7AXNLnRvzP1WSt1n9iIpQnOpEGDrTFSCpEIQCEIQC6d1XM+uYBgb1iuywOqOAaJzH/VOBc+FmFpLSAMwstXnPUTve4DQ/FK4inFusThTcHHEW7TuGYKhdobDikNThiRyVI5ahu3O+HjmF6S0WfNnZwleabrPbHNekdD3zZm/ewIO6hCEHD0uqYbO771AlUDZrGKtUNImSr305MWZ3J37Sqn0TsuKuOAPyQcK/7pbSOQiRK4AVhdIFlwlmX4T6/VV6ECrZsDZeFrStq7ycYjeEIvPRiizqHh5AEDWQNiqrTWysbWeWPa4TPZIIBOsZfeak91Xa+qzt1HFv5RkFhv7R9rW9luSmX26XNsVqhdStdwgkDMa/YrQfSInzVI4xLPY6kO5rXhJKMWfo3eTsDcLC4xs37VKxZatVoxtawbtZHeoDoNejceF2vX37fn3lSPSnSd7G9XR+N2Qyk84UWe3eX05Ok+jDGg1A5oOvMgD6KA2lrQTmJ4bfqt29adod/UrPcZOpxJ8tQTLvs1mLXOqvqtI2MDY4ZkHNVHLVlrmlKAn1sE9mY2TExxhIxuR5e4+a1JiClTSglWiLxjI4ehUwDA45VHAzmOycxltHAKFaJOAeORHofZTGq2cTmyJOWzOIJHgprtn4bbaGREzLfv1VZ29sOVhue+CXOBGHLkNbvvcq+t75ckTtrBI5KkKpzZrCe2vRmgrps4/1/aF5ysR7YXofo/q4rOP0sPkglaEqEEd03ZNmd3/tKgGgNmmsDxA91ZWklLHQI4j5e6hugVlwvzGp5Hg1BzelamA4ZfcBVG7Wrg6WR2h97AqfdrQC3LtHbHMeq01ko1S0yhFv3DRxMjHh5Quq+7KTgQ5+I8Xz5SqWtV61HjA1743AkT3BaZsj2kOdLZ25yp8XXz/xYl83MKbsTZDZzjOFxLxuUub1jM8tXy+S4X8wfT7LLQ942gh+Hl2ipHo7eFUiS3GycwNYO2PknxMstROpQiZB+X0WuQrUtWj9G0jGzJx2jIzxUUvbRmpSmBI5e2zuW9Li/XCuq2dU8O2SO7irVuxlKrTFQNGMiZ1nuO5VHVokHIGdy6uj2kL7M8CSWTm0/eSyzpm89VK9J7qe9hLWkx2tW7X5KLWHRmvVaXtaYiRxVx3LedG00gWlpMatoO4hcK1PFkqYdTHOJYQJwE62HhuWXV56Vcy1Wr7gqsDi9rmFu8bVotpEB07t22RkrVvW2Nqt/psc8xtBAniSq7v1pYRTiIEu4uOc+i3OrfrNZ447kxKUipzd7RmoRUEZ5+xU8s1jtDxm1rWknOTIB7tar/RipFZn6lYl96TsoUcLYLyMh7ngprrnkntHtLbUKQNMO7ThBj8LR81A3Pkystvtr6ry9xJJKwNWyI1e09IUqQrUs9hHbHNehOj1kWfwHhK8+WAdsL0NoIyKJH+Q/aD7oJShCEGK0U8TS3euDcV39XUqiNVTEOThOSkS1S3DUn87Y725jyJ8EFedKdKSDG70KqG2WbC48pV2dJNKQDwHqR7qrL4skNa7e2EEaSoIQg6Vzva17S4DX9lTG9bnNalLBmMxx4KA0nwQVaGhN9tezq3gZANPLYVlVmdV5Z9Hqz3EARBIM653QpVojdlejUNN7HAEbdUjaO4qS35Yeqca1OHT8TR+IbCP8gnXVUqVHMd1L2gAy50iZ1CPdTbV5zyuk+6QTjY5zHbYiDzCzfwctwvOLjAW61pAzSwpd5Ii1v0XpPMlve04StEaJMORdPB7AT/6EFTNzU3CnaeOa4V26M0acOEg/wCDntHLWu2KbRsnnn6ocklOqmWC3Pa1h1AegGtVHf8AUxu6z87nR+kZe/krBvp7qpNNs4fxuGxv5R/kVANJ4a8M1Q3VunUPCFeY4/yuDCSEoKRU851Ko5plpIPBJXrveZe4uPEpzB6H0WNwQNaE4BACdCASOSpHIN652YngcQvRGiLMNJ36h+0KgNGWzVZ+oL0ZcDIpN4ge6DqISIQCx1WyJGsGR8vCVlSIIdp1TxMn/CR3EFQK8LBjs4IGeEOHdr8pVs6Q2XHSjmO4ghRC5bJ1lAMjMF7fA6vNGxSVpZDiFhXe0pu00qrmxqOXJcEIwEru6LW3BVaDqPZPt5+q4RS0aha4Eb0rZeVfNjwOaHADiu9d1MESVW+jGkjHNDXy0nadU81NrJa8pYQQVyv16v7Z9N62kYslrpgcTmSntCNk5DCmwspCaQjWIhI5krNhShixvXLttNjGGAAPvNUze9p62q9/5nGOQyHkrJ05vMNYabD2ndnLcfiPt3qCsuZ7WGo8RlkDx2lXlx/kvfUcEhCfWGZ5pit5wEJzBKy2mjhcR4ckGCEIQgEjkqQoO5owz+oDuMr0VcrIps/S33VA6H0pf/qV6Auk/wBNh3sZ6IN9CEIBBQgoMdZmJpBXAuyydXWqMyzcHtHB2vLmFIlp2umGubVAktGF0fkcRPgQD3FGxA+knRzG3rmNz2x5hUtaKRY4gr1ZWotewscJBH2VSHSDosaLy9o7JM8igr1NT3CDCaUYmehNqYXdW6J1iYMjaM1admotAGEADgAF5+strdTeHtJBBkK09EtNabwKdYhjt5yaeR2clOo74364m7aayNYstEtcAWkEbwshpu2Ad86lCrprmkkwLbaw7W+YTur4IzrRFNMrMIGQk7tXnsXQNJBpxmUb5IwbgD39Y9rS7a4jVwaNgUd02DKVItBEkgAd8n0Usvm/GU5pshz905Di47OWtVRpbXe5wLzLjJPyA2BVIzV9IvUOZTUEpFbzs1DWpBbrte9gqMY6MOeUeqj1n+JWhYGYqWf5R6I2KuewgwU1dW/bNge4DflyK5QRgSOSpEE30FpS+eAHifor0u1mFjW/lGHwJhU/0dUMTu9quWg2C4cR6D6oM6EQhAIQhAJCEpSIGU2YRA1bOHBRvTyg11mcSNQPopQFGNPnxZnd/oUI883gAHmN5WoVs249srXhA0hIMtSfCSEEh0d0ytFlIGIvZ+Vx9Crc0Z03s1qAbOB/5XZeG9UAWp1J7mHE0kEbQssVNPVTGg5hP6tUdov0lVrPDKwNRm8RiHzUjvXpep4MNmovLyNb4DR3DMqeU6sO8LbSoMNSo9rQM8yAq5vfTt1Z3V0GOawnCamo8MI2c1HqNG0W13X2p7sOtrNQPIbB5ro1qDGtwgACI3ABPFsrdoMGGdusz95qC6U1sVUgfhAHfrUwFGs9gJlgiJ1OdxA2DiVXtsZL3Z7TnwG1bI3Wu/GnhSJ7yhgzVObLZmdoK07kZLI4D0VdspQ4CPwhWTc7YYOSKiF6V2aHz3eH/VFArP0iu/G0kDPX4a1ALZYcOYQsaBSN1pXJGaxzRK3Oi6n2hz9ArWaO2eIHkVWHRcwyOZ/aFZzviHePf2QZUIQgVCEIBEIQgAon0ivizEbz9PdSxQDpUtGGiG/esfJBRtrdLysITqzpcUgQEJCEqEDUkJxWShRc8hrQSTkgwtpyYAU10a0fDAKlUDeGnyLvkpLodoMKbBaLQO1EtadTeJ4+ikNTRt9XtCWU/wD6fxaDqHE929Y2RG3PfUd1dNpJ4bOJOoBdSx3Q1kPqHG/WB+Bp4A6zxK3mUm0R1bG4QPHmTtTHO2opzNIbXhY46oafHYqqtjoy2n0+qmul9qMYZy+J3Iah3lV/VeXEkrU00roXVZcbwOOfIZlc8KT6NMDcT4zgDlnJ9kIbaaMVY/SpvYLU1rIxBQy0EvrO5x4KSWKtDAJA5ABTa2R0alYOBgPdya5Qy/bO5pd2HAHMSIUhfWM5z4rRvOnib4+mSdagb9aSm6COazWtkOKxUfiHMKkLp6LnjVz9ArIqbD/kPPL3VY9GdVuIDaXnzCs6v8JO7PwzQZJQiUIFQhCAQhCAVRdLFvJf1Y1AifAq2qjw0Fx1AEnuVF9ItYufJ1kuceE5Ae3cgr2c08LG1ZECoSJUCFSjQkNFZrnbASOByE+ai5Xa0btTGPBeYEOBPd9EHoS44ewOLy7IQ3sw0ScOQ1mN67BCr7RC92zSIJIcMDuEnsk8nZd6sGUHMt90teJAgqK3lY30wZCnwUL6R7zbSoET23ZDhO3wk9yNlU5pRai57hO301D73qOLNaquJxPFYYRlZKLZICnd2UAykOXqo1cFlxOxHZ6qRW55azI5AclNVHLoEmoSM81IKFlJguPguJcVMuJKlAYUrWL+Fbu8UVLCHAxIWYynNqRrWNQK/wCyOa85a9R9e9cal8Q5qcaSPaWns55FQh5hyqJq0OjSpFRnF3nH1KuKq2WkcCqP0ArYXh35XMd3bfKVeUrUtH+OCFyv4Z32ShBJUIQgEISEoNS3v7JB1YSTyGofe5UDpxXxVDx+vzV26Q18NB2wvMcm6/Qea8+6SWnHUcd7ie7Yg4rQnpoTkCoQkQIVsWezuILomPdYQupY6wA7IEtzIP4gdcoJloa/DTAeYEuznZOuecq3rmvJlem17XtcYh0HaMieUhee7danuYKbSWNgQYydvBOwSpJ0bXm+hUDHmQTIz1zkQPVOtq7qrw1pcdQEnuVC9JN+GtWLZyblHHd3ZBWtpbfjKdmc5rgSRl7SvPF6WjG9zteZQaYWez08RAWJrZyUv0VufEQ9wy2T6rLeEnW/c13YGyRl95lat9WkH+m3MmF17/vllNvVU4LojlxK5d03U956x3n6rOqb9yWTA0H7lddY2Mw5JHVFjWZY3wsRqLG543oMdvszHsOX/FX16WbA8jcVY7ADkotpPYY7XceY1eS2VNjd0DqduOA9VfFifLGzrAg92XyPevPGhj8NVo5hX3Z6sUcWWbAe8CPYKkt/q27ghQ7+dO3N8ShG8TdCEIwFYquxu/02/LvWRYgRm7dlPAa/vggh3SBbMLCJ1Ngfqd9IVDW98vJVj9It74nFoO0n2aPBVg50mUaUJUgTgjAgBPcyAE6yMxOAQbP8uOAvzmR4b1zHtgwpNVeC0Nb+JmEcx/xZLg0efVcHEdmfE7ljeOVdNgtLzFNjiDvHZ81LrNo/UpjrHvDYzwiciNs7FM7HZmUGQRq18Fyb/vRgYRhE6xJPdOev0WXjZEK0jvt7h1bnT96z97VFDmty8a+N5K1FSXRuyzgnE7UNa7le/HBvV0RGyR7KN2Vr3w0ExKn1y6Psps6x8FwE8uA4qaqORc10uc/rH7N+eZ91N7MwNAAWtZqWzvPMrfZTU2qkNfRDlrPu90rsWezzAAzOpdRljDW5/fJR5cVyIg+xtbrOa1XthSS02djiQNaj94UHsOqQqmussY2LSv2jjYcs48xqWxZ6wJWS2t7BVMQm5H4KrTxB8Cr/ALreHWZpMQMjyOv18lQNZoZVO6Z8Vdug9ta+z4XH8InvEH0KqIZ/5Wz8g8ChZf4qp+dn/pqFokKEIRhCtGt/Zd+kpEIPP2mv9x3P2CizUIRtPanN1oQjGWtqb+ke6y2H4h+koQg613/FT/2VjaFfCzkhCxTfvX42/qPoVANLNZ5IQp/WxBTrSFKhVEO1cXxDm39wVjV/7Y/Uz9zUIU6XPjJZtq6FNCFC4613/F/p7hbds+HuQhc9fU/qP0fjTby+FCFWVVGR8RWxavgPJCF1ShF5fGe5WboJ/YqfoP7nIQqnxDEhCFrX/9k='
  }, {
    id: 2,
    title: '手绘',
    imgUrl: 'https://n.sinaimg.cn/sinacn10115/439/w641h598/20200214/4a9b-ipmxpvz8164848.jpg'
  }],
  articleList: [{
    id: 1,
    title: '迟子建的文笔真的绝了，真后悔现在才读到',
    desc: '书名：“迟子建散文典藏” 出版社：浙江文艺出版社 作者：迟子建 类型：文学、经典 ～～～～～～～～～～ 关于迟子建，你不能不知道的事。 三次获得...',
    imgUrl: 'https://i03piccdn.sogoucdn.com/0e01a06ac418c8c3'
  },
  {
    id: 2,
    title: '我果断地退出了家族群',
    desc: '我们这个家族群已经成立三四年了，群主是我们家族的堂哥，因为堂哥是我们家族里混的最好的，其他堂兄堂弟什么的都在农村种地，也没什么文化。 咱也不知道...',
    imgUrl: 'https://img.syt5.com/2021/0519/20210519083837846.jpg.420.420.jpg'
  },
  {
    id: 3,
    title: '说说我们家这次投资的事',
    desc: '我想说说老公这次投资的事。 去年六月投资了一个加油站，我当时觉得不靠谱，但是他执意要投，最后我们协商就两股9万块钱。 他那个同学投了20股将近5...',
    imgUrl: 'http://img01.yohoboys.com/contentimg/2018/11/22/13/0187be5a52edcdc999f749b9e24c7815fb.jpg'
  }],
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
  writeItem: [{
    id: 1,
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    name: '卢璐说'
  },
  {
    id: 2,
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    name: '茶点故事'
  }, {
    id: 3,
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    name: '吴晓布'
  }, {
    id: 4,
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/6652326/21cbdf91-a930-45d2-ad61-4f91df1e9709.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    name: '野狐狸_'
  }, {
    id: 5,
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    name: '三儿王屿'
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}