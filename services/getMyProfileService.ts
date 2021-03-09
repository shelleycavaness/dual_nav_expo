import axios from "axios";
import AsyncStorage  from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN = "ACCESS_TOKEN";

export async function getMyProfileService(){  
   
    let token = await AsyncStorage.getItem(ACCESS_TOKEN);
    let accessToken :string = "";
    if(token!=null){
      accessToken = token;        
    }
    if(token == null)
      { return null }
    let response = await axios.get<ResponseWithData<ProfileData>>('http://localhost:3000/api/player',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data;
}

type ResponseWithData<T> = {
  data: T;
  success: boolean;
  errors: Array<Number>;
};
type ProfileData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
};