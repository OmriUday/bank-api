import React, { Component } from 'react'

class Message extends Component {

  constructor () {
    super()
    //  יצירת האובייקט - סטייס התחלתי שהוא בהתחלה מוגדר כ-ריק
    this.state = {
      // בשורה הבאה אני מייצר פרופרטי (כמו שהגדרתי פרופרטי שם - עומרי אבל ב-אפפ ביחס לפרופס וקומפנונטות פשוטות כי אני רוצה כאן לשנות את הפרופס כל פעם ובחלק הקודם אי אפשר לשנות את הפרופס שהוא מגיע אל הקומפוננטה)
  
      message: 'Welcome Visitior -- Before, the Begining of State'
    }
  }

  // כאן בעצם אני רושם את המטודה שתגרום לשינויים שהגדרתי למטה ברנדור לפי אוןקליק וכדומה
  changeMessageHandler() {
    // סט סטייס יגרום לשינוי של המצב של המסך של המשתמש
    // ומה שהסק סטייס מקבל זה בעצם אובייקט שהוא בעצם האובייקט שינוי שהמשתמש עשה    ואנחנו מקבלים אותו מן האפליקציה וזה בעצם יהיה המצב החדש של הקומפוננטה שלי
    this.setState({
      message: 'Thanks About the Click Button - now this is the NEW message'
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          {/* כאן בעצם אני מדפיס למסך את ההודעת מסאג' שהגדרתי בפונקציה למעלה */}
          {this.state.message}
        </h1>
        {/* כאן באון קליק אני מוסיף האזנה לאירוע כאשר המשתמש ילחץ על הכפתור ישתנה מה שאני רוצה במסך שלו */}
        <button onClick={() => this.changeMessageHandler()}>Click to change the Message</button>
      </div>
    )
  }
}

export default Message;