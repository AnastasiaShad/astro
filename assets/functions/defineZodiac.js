import Zodiac from "../../screens/Zodiac";
import { useState, useRef,useEffect} from 'react';
import * as React from 'react';
const fullZod = ['Овен','Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион','Стрелец','Козерог','Водолей','Рыбы'];
export const DefineZodiac = (day2, month2) => {
        day = day2
        month =month2 
        const [zod, setZod] = useState();
     
        if ((parseInt(day) >=21 && month == '3')  || (parseInt(day) <=20 && month == '4'))
        {
            setZod(fullZod[0])
        } else if ((parseInt(day) >=21 && month == '4')  || (parseInt(day) <=20 && month == '5')) {
            setZod(fullZod[1])

        } else if ((parseInt(day) >=21 && month == '5')  || (parseInt(day) <=20 && month == '6')) {
            setZod(fullZod[2])
        }
        else if ((parseInt(day) >=21 && month == '6')  || (parseInt(day) <=22 && month == '7')) {
            setZod(fullZod[3])
        }
        else if ((parseInt(day) >=23 && month == '7')  || (parseInt(day) <=22 && month == '8')) {
            setZod(fullZod[4])
        }
        else if ((parseInt(day) >=23 && month == '8')  || (parseInt(day) <=22 && month == '9')) {
            setZod(fullZod[5])
        }
        else if ((parseInt(day) >=23 && month == '9')  || (parseInt(day) <=22 && month == '10')) {
            setZod(fullZod[6])
        }
        else if ((parseInt(day) >=23 && month == '10')  || (parseInt(day) <=22 && month == '11')) {
            setZod(fullZod[7])
        }
        else if ((parseInt(day) >=23 && month == '11')  || (parseInt(day) <=21 && month == '12')) {
            setZod(fullZod[8])
        }
        else if ((parseInt(day) >=22 && month == '12')  || (parseInt(day) <=19 && month == '1')) {
            setZod(fullZod[9])
        }
        else if ((parseInt(day) >=20 && month == '1')  || (parseInt(day) <=19 && month == '2')) {
            setZod(fullZod[10])
        }
        else if ((parseInt(day) >=20 && month == '3')  || (parseInt(day) <=20 && month == '3')) {
            setZod(fullZod[11])
        }
        return zod;
    
};