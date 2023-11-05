import profil from './profile.jpg'
export const Profil =()=>{
    return(
        <div> 
        <div className='flex justify-center items-center'>
          <p id='title'>cv de travail de Yousssef KENTARI</p>
          <img src={profil} id="profil" />
     </div>
     <div>
      <p id='subtitle'>exemple de cv par react</p>
     </div>
    </div>
    )
}