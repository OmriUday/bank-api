import React, { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  // לשים לב סט סטייס זה אובייקט ויש לו 2 ארגומנטים , אחד זה השינוי , והשני זה התקשרות חוזרת כדי שהיא תקרה רק אחרי השינוי למשל הקונסול לוג ולא לפני השינוי - חשוב !!!!!!!!!!!!!!! אם אני רוצה רק להסתמך כל פעם מחדש לפי הסטייס הישן ולעשות פעולת שינוי החלק הזה הוא מתאים :
  // changeCount() {
  //   this.setState(
  //     {
  //       count: this.state.count + 1
  //     },
  //     () => {
  //       console.log('call back value : ', this.state.count);
  //     }
  //   )
  //   console.log('the nottt call back value : ', this.state.count);
  // }

  // אבל אם אני רוצה למשל להסתמך כל פעם על השינוי ביחס לשינוי שהיה קודם , אני אעשה הכל אחרת ונעשה את זה ככה !!!!! חשוב מאד זה החלק הכי חשוב ::::: כי כאן אני יכול לעשות שימוש לכל מיני מצבים שונים ושינויים שונים לפי הפרופס שהוא מקבל ואז מתייחס ביחס לכל אחד לפי איך שהמטודה שלו רשומה באפליקציה ::::
  changeCount() {
    this.setState((prevState, props) => ({
      count: prevState.count + props.addValue
    }))
  }

  // קודם קורה לפונקציה למטה והיא מבצעת את הפעולה של השינוי למעלה 5 פעמים ..

  changeCountX5() {
    this.changeCount()
    this.changeCount()
    this.changeCount()
    this.changeCount()
    this.changeCount()
  }


  render() {
    return (
      <div>
        <h1>
          Count : {this.state.count}
        </h1>
        <button onClick={() => this.changeCountX5()}>Click To Change Value</button>
      </div>
    )
  }
}

export default Counter;
