import requests from "@/utils/requests";
export const reqWeather = ()=>requests({url:'https://api.vvhan.com/api/weather?city=北京',method:'get'})