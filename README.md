# Pomodoro Timer
Website application which implements a pomodoro timer, a utility for the Pomodoro time management technique.

## What Is a Pomodoro?
**The Pomodoro Technique** is a time management technique which uses set time lengths for alternating periods of work and break. The technique is named after the tomato shaped kitchen timers which the technique’s inventor used while developing the technique in college (pomodoro is Italian for tomato.)

The Pomodoro Technique works as follows:
1. Decide on the task to be accomplished. This can be something small or something larger, but it’s important that the task requires several minutes of undivided attention, and that you have a clear baseline for when the task is considered “done.”
2. Set your timer for the duration of your work period. Traditionally, this is 25 minutes, although you can experiment with what works best for you. This time period is a pomodoro.
3. Work on the task until the timer rings. During this time, you will give the task your full, undivided attention, and will not interrupt yourself from working on the task. If something external interrupts this work period, write down what you are working on, and come back to it later, starting a new pomodoro when you do so. It is important that pomodoros aren’t “split,” each pomodoro is a continuous period of undivided attention.
4. When the timer rings, you have completed your pomodoro. Mark down that you’ve completed a pomodoro, traditionally by putting a check mark on a piece of paper.
5. Take a short break after completing each pomodoro. This break is traditionally short, around five minutes. These breaks should be free of work related activities, such as phone calls or emails. After your break is finished, start another pomodoro.
6. Once you realize you’ve completed four pomodoros (such as by seeing you’ve put down four check marks on your sheet of paper), take a longer break. Traditionally, these breaks are 20 to 30 minutes long. Once finished with your break, continue with another round of pomodoros.

The Pomodoro Technique is used to make focusing on work easier. It uses short burst sessions followed by a break as a relaxing reward to allow the user to focus on the feeling of accomplishing smaller sub-tasks instead of worrying about far off deadlines. Taking regular breaks allows the user to avoid “burnout” caused by pushing themselves too hard. Meanwhile, having those break periods also allows the user to avoid distracting themselves during work periods, since there’s a time set aside for dealing with distractions set aside from work time. Finally, the technique also assists with organization, as it creates records of how long different tasks take to accomplish, which allows for better estimation of task times for future pomodoros.

## The Application
Work in Progress

The **Pomodoro Timer** is a website application for keeping track of your work and break periods when using the Pomodoro Technique. It is built with HTML, CSS, and JavaScript with JQuery. The application can be found at https://farr16.github.io/pomodoro-timer

### The Interface
![A screenshot of the application interface as viewed on a desktop web brower](/readme-images/desktop-screenshot.png?raw=true "Application Interface Screenshot")

*Figure 1 - Screenshot demonstrating the entire interface of the application as it appears on a desktop web browser.*

The Pomodoro Timer interface consists of three panels. The top two are side by side pinels for setting the work and break time periods. Each timer panel has two buttons, one for increasing the time period and one for decreasing it. The timer panels also have a text display between the buttons which displays the current time period length in minutes. The bottom panel is the clock panel. It has two text displays, one for displaying the current session (either work or break), and the clock display, which displays time remaining in the current session in an hours:minutes:seconds format. Finally, the clock panel has a button, which is used for starting and stopping the timer.

#### Responsiveness

The Pomodoro Timer interface is designed with responsiveness in mind. The application resizes itself with respect to the screen size, allowing the application to be visible and functional on screens of different sizes and aspect ratios.

![A screenshot of the application interface as viewed on slim aspect ratio screen, such as a smartphone. Screenshot features the top two panels of the interface.](/readme-images/iPhone-screenshot-1.png?raw=true "Smartphone Application Screenshot 1")
![A screenshot of the application interface as viewed on slim aspect ratio screen, such as a smartphone. Screenshot features the bottom panel of the interface.](/readme-images/iPhone-screenshot-2.png?raw=true "Smartphone Application Screenshot 2")

*Figures 2 and 3 - Screenshots demonstrating the interface of the application as it appears on a slim aspect ratio screen, such as a smartphone.*
