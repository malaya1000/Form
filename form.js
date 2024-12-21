function result()
{
     var name=document.getElementById('name').value;
     var email=document.getElementById('email').value;
    var roll=document.getElementById('roll').value;
    var phy=parseFloat(document.getElementById('phy').value);
    var chem=parseFloat(document.getElementById('chem').value);
    var bio=parseFloat(document.getElementById('bio').value);
    var math=parseFloat(document.getElementById('math').value);
    
    var res=IsValidEmail(email);
        
    var total=phy+chem+bio+math;
    var avg=total/4;
    var per=(total/400)*100;

     
   if(name='' || name.length<6)   
   {
    alert("Enter name");
    document.getElementById('name').focus;
   }
 
  
  


  else if(res==false)
   {
   alert("Enter valid email");
   document.getElementById('email').focus;
    }
   else if(roll=='' || roll<0)
   {
    alert("Please enter Roll");
    document.getElementById('roll').focus;
   }
   else if(roll>1000)
    {
     alert("Please enter Roll no should be below 1001");                      
     document.getElementById('roll').focus();
    }
    
   else if(phy=='' || phy<0)
    {
        
     alert("Please enter Physics mark");
     document.getElementById('phy').focus();
    }
    else if(phy>100)
        {
            
         alert("Please enter Physics mark should below 100 or equal to 100");
         document.getElementById('phy').focus();
        }
    else if(chem=='' || chem<0)
        {
         alert("Please enter Chemistry mark");
         document.getElementById('chem').focus();
        }
        else if(chem>100)
            {
                
             alert("Please enter Chemistry mark should below 100 or equal to 100");
             document.getElementById('chem').focus();
            }
        
           else if(bio=='' || bio<0)
                {
                 alert("Please enter Biology mark");
                 document.getElementById('bio').focus();
                }
                else if(bio>100)
                    {
                        
                     alert("Please enter Biology mark should below 100 or equal to 100");
                     document.getElementById('bio').focus();
                    }
                else if(math=='' || math<0)
                    {
                     alert("Please enter Math mark");
                     document.getElementById('math').focus();
                    }
                    else if(math>100)
                        {
                            
                         alert("Please enter Math mark should below 100 or equal to 100");
                         document.getElementById('math').focus;
                        }
  else
  {


    document.getElementById('lblname').innerText=name;
    
    document.getElementById('lblroll').innerText=roll;
    document.getElementById('lblphy').innerText=phy;
    document.getElementById('lblchem').innerText=chem;
    document.getElementById('lblbio').innerText=bio;
    document.getElementById('lblmath').innerText=math;
    document.getElementById('lbltotal').innerText=phy+chem+bio+math;
    document.getElementById('lblavg').innerText=avg;
    document.getElementById('lblper').innerText=per;
    document.getElementById('lblemail').innerText=email;
  }
}

  function IsValidEmail(email) {
    //Check minimum valid length of an Email.
    if (email.length <= 2) {
        return false;
    }
    //If whether email has @ character.
    if (email.indexOf("@") == -1) {
        return false;
    }

    var parts = email.split("@");
    var dot = parts[1].indexOf(".");
    var len = parts[1].length;
    var dotSplits = parts[1].split(".");
    var dotCount = dotSplits.length-1;
    


    //Check whether Dot is present, and that too minimum 1 character after @.
    
    if (dot == -1 || dot < 2 || dotCount > 2) {
        return false;
    }

    //Check whether Dot is not the last character and dots are not repeated.
    for (var i = 0; i < dotSplits.length; i++) {
        if (dotSplits[i].length == 0) {
            return false;
        }
    }

    return true;
}

function clear()
{

  document.getElementById('name').value="";
  document.getElementById('email').value="";
  document.getElementById('roll').value="";
  document.getElementById('phy').value="";
  document.getElementById('chem').value="";
  document.getElementById('bio').value="";
  document.getElementById('math').value="";

}