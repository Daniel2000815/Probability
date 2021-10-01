import React, {useState} from 'react';
import Distribution from '../components/Distribution';
import NumberInput from '../components/Numbernput';
import RangeSlider from '../components/Slider';



//             <span ><RangeSlider width="1110px" disabled={true} max={100} min={0} handleChange={(value) => {setMin(value[0]); setMax(value[1])}}/></span>

function Uniforme() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(1);


    console.log("a:"+a + ", b:"+b);
    console.log("minB:"+ (b+a));
    return(
        <div>
            <span style={{position:"left", width:"100px"}}><NumberInput text={"a"} default={0} handleChange={(e)=> setA(Number(e.target.value))} /></span>
            <span><NumberInput text={"b"} default={1} handleChange={(e)=> setB(Number(e.target.value))} /></span>

        <Distribution 
            min={a}
            max={b}
            funcion={()=>1/(b-a)} 
            media = {(b+a)/2}
            varianza = {(b-a)**2 / 12}
            step = {0.01}
            stringMedia= {"E[X]=\\frac{b+a}{2}"}
            stringVarianza={"Var[X]=\\frac{(b-a)^{2}}{12}"}
            stringDesviacion={"\\sigma(X)=\\sqrt{\\frac{(b-a)^{2}}{12}}"}
            stringFuncionDensidad={"f(x)=\\frac{1}{b-a}"}
            stringFuncionMasa={"F(x)=\\frac{x-a}{b-a}"}
            stringFuncionMomentos={"M(t)=\\frac{e^{bt}-e^{at}}{t(b-a)}"}
        />
        </div>
        
    )
}

export default Uniforme