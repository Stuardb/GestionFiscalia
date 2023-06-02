import {config} from 'dotenv'
config();

console.log(process.env.NAME)
export default{
    port: process.env.PORT || 4000
}