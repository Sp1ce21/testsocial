import CreateChatProfile from '../../../common/CreateChatProfile';
import LineDateCreator from '../../../common/LineDateCreator';
import s from './ChatMain.module.css';
import image from '../../../assets/images/Chat/Photo.png'

function ChatMain(props) {
    return (
        <main className={s.main}>
           <CreateChatProfile message='I did for 6 days in Iceland' time='6:38 PM' friends={props.friends[14]} span='@pierrhack' setCurrentFriend={props.setCurrentFriend}/>
           <LineDateCreator date='Monday, October 22nd'/>

           <CreateChatProfile message='Which country to visit next? This is a photo with my friends - celebrating in Bali &#128526;' time='5:02 PM' friends={props.friends[15]} image={image} setCurrentFriend={props.setCurrentFriend}/>
           <LineDateCreator date='Yesterday'/>

           <CreateChatProfile message='wow it’s amazing, I want to buy a van and travelling next year' time='11:54 AM' friends={props.friends[16]} span='@har_adams' setCurrentFriend={props.setCurrentFriend}/>
           <LineDateCreator date='Today'/>

           <CreateChatProfile message='Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).' time='11:54 AM' friends={props.friends[17]} setCurrentFriend={props.setCurrentFriend}/>
           <CreateChatProfile message='What`s the reason for the van? Saving money or just like to get outside? If you`ve got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want.' time='11:59 AM' friends={props.friends[13]} span='@aa_da'/>
           <CreateChatProfile message='I did for 6 days in Iceland' time='6:38 PM' friends={props.friends[14]} span='@pierrhack' setCurrentFriend={props.setCurrentFriend}/>
           <LineDateCreator date='Monday, October 22nd'/>

           <CreateChatProfile message='Which country to visit next? This is a photo with my friends - celebrating in Bali &#128526;' time='5:02 PM' friends={props.friends[15]} image={image} setCurrentFriend={props.setCurrentFriend}/>
           <LineDateCreator date='Yesterday'/>

           <CreateChatProfile message='wow it’s amazing, I want to buy a van and travelling next year' time='11:54 AM' friends={props.friends[16]} span='@har_adams' setCurrentFriend={props.setCurrentFriend}/>
           <LineDateCreator date='Today'/>

           <CreateChatProfile message='Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).' time='11:54 AM' friends={props.friends[17]} setCurrentFriend={props.setCurrentFriend}/>
           <CreateChatProfile message='What`s the reason for the van? Saving money or just like to get outside? If you`ve got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want.' time='11:59 AM' friends={props.friends[13]} span='@aa_da' setCurrentFriend={props.setCurrentFriend}/>
           <CreateChatProfile message='I did for 6 days in Iceland' time='6:38 PM' friends={props.friends[14]} span='@pierrhack' setCurrentFriend={props.setCurrentFriend}/>
           <LineDateCreator date='Monday, October 22nd'/>

           <CreateChatProfile message='Which country to visit next? This is a photo with my friends - celebrating in Bali &#128526;' time='5:02 PM' friends={props.friends[15]} image={image} setCurrentFriend={props.setCurrentFriend}/>
           <LineDateCreator date='Yesterday'/>

           <CreateChatProfile message='wow it’s amazing, I want to buy a van and travelling next year' time='11:54 AM' friends={props.friends[16]} span='@har_adams' setCurrentFriend={props.setCurrentFriend}/>
           <LineDateCreator date='Today'/>

           <CreateChatProfile message='Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).' time='11:54 AM' friends={props.friends[17]} setCurrentFriend={props.setCurrentFriend}/>
           <CreateChatProfile message='What`s the reason for the van? Saving money or just like to get outside? If you`ve got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want.' time='11:59 AM' friends={props.friends[13]} span='@aa_da' setCurrentFriend={props.setCurrentFriend}/>
        </main>
    );
}

export default ChatMain;
