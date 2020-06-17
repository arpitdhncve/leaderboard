import React from 'react';
import style from './style.css';

class Main_page extends React.Component{
    
    componentDidMount()
    {
        let point_data=[{name:'asda',points:23},
        {name:'dsdc',points:21},{name:'ddc',points:20},{name:'qweqwe',points:13},{name:'wqdsd',points:23}]

        loadtabledata(point_data)
        function loadtabledata(point_data)
        {
            const tablebody= document.getElementById("tableData")
            let datahtml='';

            const head=document.getElementById("tablehead")
            let headhtml=''
            let you = point_data[3]
            headhtml += `<tr><th>${4}</th><th>${you.name}</th><th>${you.points}</th></tr>`
            head.innerHTML = headhtml

            var i;
            for(i=0;i<5;i++)
            {
                let person=point_data[i]
                if(i===0){
                datahtml += `<tr><td><img src= ${require("./gold1.png")} width="25px" length="25px" ></td><td> ${person.name}</td><td>${person.points}</td></tr>`
                }
                else if(i===1)
                {
                    datahtml += `<tr><td><img src= ${require("./silver1.png")} width="22px" length="22px" ></td><td> ${person.name}</td><td>${person.points}</td></tr>`
                }
                else if(i===2)
                {
                    datahtml += `<tr><td><img src= ${require("./bronze1.png")} width="17px" length="17px" ></td><td> ${person.name}</td><td>${person.points}</td></tr>`
                }
                else
                {
                datahtml += `<tr><td>${i+1}</td><td> ${person.name}</td><td>${person.points}</td></tr>`
                }
            }

            tablebody.innerHTML=datahtml
        }
    }
    
    render(){
        return(
            <div>
                <table className={style.table}>
                    <thead id="tablehead">
                    </thead>
                    <tbody id="tableData">
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Main_page
