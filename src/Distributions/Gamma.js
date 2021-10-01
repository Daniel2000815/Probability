import React, {useState} from 'react';
import Distribution from '../components/Distribution';
import NumberInput from '../components/Numbernput';
import RangeSlider from '../components/Slider';
import {factorial} from '../Libraries/MyMath';



function Gamma() {
    const [alfa, setAlfa] = useState(1);
    const [beta, setBeta] = useState(1);
    const[min,setMin] = useState(1);
    const[max,setMax] = useState(1);

    return(
        <div>
            Rango de la función:
            <span ><RangeSlider width="1110px" max={20} min={0} handleChange={(value) => {setMin(value[0]); setMax(value[1])}}/></span>

            <span style={{position:"left", width:"100px"}}><NumberInput text={"α"} default={0} handleChange={(e)=> setAlfa(Number(e.target.value))} /></span>
            <span style={{position:"left", width:"100px"}}><NumberInput text={"β"} default={0} handleChange={(e)=> setBeta(Number(e.target.value))} /></span>

        <Distribution 
            min={min}
            max={max}
            funcion={(x)=>((factorial(alfa+beta))/(factorial(alfa)*factorial(beta)) * x**(alfa-1)(1-x)**(beta-1))} 
            media = {alfa/(alfa+beta)}
            varianza = {(alfa*beta)/((alfa+beta+1)*(alfa+beta)**2)}
            step = {0.01}
            stringMedia= {"E[X]=\\frac{\\alpha}{\\alpha+\\beta}"}
            stringVarianza={"Var[X]=\\frac{\\alpha\\beta}{(\\alpha+\\beta+1)(\\alpha+\\beta)^2}"}
            stringDesviacion={"\\sigma(X)=\\sqrt{\\frac{\\alpha\\beta}{(\\alpha+\\beta+1)(\\alpha+\\beta)^2}}"}
            stringFuncionDensidad={"f(x)=\\frac{\\Gamma(\\alpha + \\beta)}{\\Gamma(\\alpha)\\Gamma(\\beta)} x^{\\alpha-1}(1-x)^{\\beta -1}"}
            stringFuncionMasa={"F(x)=1-\\sum_{n=0}^{k-1}\\frac{e^{-\\lambda x}(\\lambda x)^n}{n!}"}
            stringFuncionMomentos={"M(t)="}
        />
        </div>
        
    )
}

export default Gamma;