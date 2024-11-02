const getStoredReadList = () =>{  /// ekhane ekta function kora hoyse
      const storedListStr = localStorage.getItem("read-list"); /// read-list name jodi kono kciu thake taile amake dau and seita abar >>> storedListStr <<<< mordhe rakaha hoyse
      if(storedListStr){  /// mane storedListStr <<<< name jodi kono kicu thake
          const storedList = JSON.parse(storedListStr); /// amara jani localStorage jodi kono kicu thake taile seita string akyare thake taile storedList <<<< ai variable er mordhe rakhe dilam
          return storedList;  /// storedList <<< ai variable er mordhe rakhe dilam
      }
      else{
          return [];  //// kono kicu na paile ekta fake array dau 
      }
}

const addToStoredReadList = (id) =>{  ///  addToStoredReadList <<<< ai function ta k call korle tar mordhe id astese
    const storeRead = getStoredReadList();   //// ager function ta k ekta variable er mordhe rakhe disi 
    if(storeRead.includes(id)){   //// j id amara paitesi seita jodi storeRead<< ai function er mordhe thake taile 
      alert("Aleady Exists");   /// ai alert show koro
    }
    else{
      storeRead.push(id);  /// jodi id ta na thake age theke taile storeRead<<<< function er mordhe push <<< mane pathai disi
      const storedListStr = JSON.stringify(storeRead);  /// storeRead <<< ai funtion ta k amara string akyare korsi 
      localStorage.setItem("read-list", storedListStr);  /// and seita amara localStroge er set kore dilam
      alert("Added Successfully"); /// and ekta message dekhailam
    }
}

///// <<<<<<<<<<<<<<<<<<<<<<<<<<<<< Same kaj tai nicher function tar mordhe kora hoyse >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
///// <<<<<<<<<<<<<<<<<<<<<<<<<<<<< Same kaj tai nicher function tar mordhe kora hoyse >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const getWishList = () =>{
      const storedWishList = localStorage.getItem("Wish-list");
      if(storedWishList){
          const storedWish = JSON.parse(storedWishList);
          return storedWish;
      }
      else{
          return [];
      }
}

const addToStoredWishList = (name) =>{
      const storeReadWish = getWishList();
      if(storeReadWish.includes(name)){
        alert("Aleady Exists");
      }
      else{
        storeReadWish.push(name);
        const storedWishStr = JSON.stringify(storeReadWish);
        localStorage.setItem("Wish-list", storedWishStr);
        alert("Added Successfully");
      }
}

export { addToStoredReadList, addToStoredWishList }