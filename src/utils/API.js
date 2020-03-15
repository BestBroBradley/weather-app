import axios from 'axios'

const APIKEY = process.env.REACT_APP_APIKEY

export default {
    search: function (userQuery) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userQuery.trim().split("-").join("+")}&units=imperial&APPID=${APIKEY}`)
},
    getFiveDay: function (id) {
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=imperial&APPID=${APIKEY}`)
    }
}