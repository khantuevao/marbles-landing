addEventListener('DOMContentLoaded', (event) => {
  liveTop.click()
})

const container = document.getElementById('container')

const liveBot = document.getElementById('liveBot')
liveBot.addEventListener('click', liveEvent)

const liveTop = document.getElementById('liveTop')
liveTop.addEventListener('click', liveEvent)

function liveEvent(event) {
  container.innerHTML = `<div id="tournaments">
  <div class="tabName">Live Tournaments</div>
  <div class="content">
    <div class="head">
      <a href="" id="title">Title</a>
      <a href="" id="fund">Fund</a>
      <a href="" id="buyin">Buy-in</a>
    </div>
    <div class="tournament">
      <div class="title">Sunday Million Arena. Unlimited participants</div>
      <div class="fund">$1,000,000 USDT</div>
      <div class="buyin">$100</div>
    </div>
    <div class="tournament">
      <div class="title">Wednesday Weekly. 1000 participants</div>
      <div class="fund">$50,000 USDT</div>
      <div class="buyin">$50</div>
    </div>
    <div class="tournament">
      <div class="title">Daily Clash. 100 participants. Once a day at 16:00</div>
      <div class="fund">$10,000 USDT</div>
      <div class="buyin">$100</div>
    </div>
    <div class="tournament">
      <div class="title">Fill & Start. 100 participants</div>
      <div class="fund">$1,000 USDT</div>
      <div class="buyin">$10</div>
    </div>
    <div class="tournament">
      <div class="title">Fill & Start. 100 participants</div>
      <div class="fund">$1,000 USDT</div>
      <div class="buyin">$10</div>
    </div>
    <div class="tournament">
      <div class="title">Fill & Start. 100 participants</div>
      <div class="fund">$1,000 USDT</div>
      <div class="buyin">$10</div>
    </div>
    <div class="tournament">
      <div class="title">Fill & Start. 100 participants</div>
      <div class="fund">$1,000 USDT</div>
      <div class="buyin">$10</div>
    </div>
    <div class="tournament">
      <div class="title">Fill & Start. 100 participants</div>
      <div class="fund">$1,000 USDT</div>
      <div class="buyin">$10</div>
    </div>
    <div class="tournament">
      <div class="title">Fill & Start. 100 participants</div>
      <div class="fund">$1,000 USDT</div>
      <div class="buyin">$10</div>
    </div>
  </div>
  </div>`
  event.preventDefault();
}

const hotBot = document.getElementById('hotBot')
hotBot.addEventListener('click', hotEvent)

const hotTop = document.getElementById('hotTop')
hotTop.addEventListener('click', hotEvent)

function hotEvent(event) {
  container.innerHTML = `<div id="tournaments">
  <div class="tabName">Hot</div>
  <div class="content">
    <div class="head">
      <a href="" id="title">Title</a>
      <a href="" id="fund">Fund</a>
      <a href="" id="buyin">Buy-in</a>
    </div>
    <div class="tournament">
      <div class="title">Friday Happy Hours. Unlimited participants</div>
      <div class="fund">$200,000 USDT</div>
      <div class="buyin">$50</div>
    </div>
    <div class="tournament">
      <div class="title">Daily Clash. 100 participants. Once a day at 16:00</div>
      <div class="fund">$10,000 USDT</div>
      <div class="buyin">$100</div>
    </div>
    <div class="tournament">
      <div class="title">Fill & Start. 100 participants</div>
      <div class="fund">$1,000 USDT</div>
      <div class="buyin">$10</div>
    </div>
  </div>
  </div>`
  event.preventDefault();
}

const upcomingBot = document.getElementById('upcomingBot')
upcomingBot.addEventListener('click', upcomingEvent)

const upcomingTop = document.getElementById('upcomingTop')
upcomingTop.addEventListener('click', upcomingEvent)

function upcomingEvent(event) {
  container.innerHTML = `<div id="tournaments">
  <div class="tabName">Upcoming</div>
    <div class="content">
      <div class="head">
        <a href="" id="title">Title</a>
        <a href="" id="fund">Fund</a>
        <a href="" id="buyin">Buy-in</a>
      </div>
      <div class="tournament">
        <div class="title">Wednesday Weekly. 1000 participants</div>
        <div class="fund">$50,000 USDT</div>
        <div class="buyin">$50</div>
      </div>
      <div class="tournament">
        <div class="title">Mid-week Madness. Unlimited participants</div>
        <div class="fund">$80,000 USDT</div>
        <div class="buyin">$30</div>
      </div>
      <div class="tournament">
        <div class="title">Friday Happy Hours. Unlimited participants</div>
        <div class="fund">$200,000 USDT</div>
        <div class="buyin">$50</div>
      </div>
      <div class="tournament">
        <div class="title">Sunday Million Arena. Unlimited participants</div>
        <div class="fund">$1,000,000 USDT</div>
        <div class="buyin">$100</div>
      </div>
    </div>
  </div>`
  event.preventDefault();
}


const winnings = document.getElementById('winnings')
winnings.addEventListener('click', winningsEvent)

function winningsEvent(event) {
  container.innerHTML = `<div>
  <div class="tabName">Earnings History</div>
    <div class="content">
      <div class="head">
        <a href="" id="title">Tournament</a>
        <a href="" id="fund">Date</a>
        <a href="" id="buyin">Amount</a>
      </div>
      <div class="tournament">
        <div class="title">Wednesday Weekly. 1000 participants</div>
        <div class="fund">24/03/2022</div>
        <div class="buyin">$50</div>
      </div>
      <div class="tournament">
        <div class="title">Mid-week Madness. Unlimited participants</div>
        <div class="fund">12/02/2022</div>
        <div class="buyin">$30</div>
      </div>
      <div class="tournament">
        <div class="title">Friday Happy Hours. Unlimited participants</div>
        <div class="fund">03/12/2021</div>
        <div class="buyin">$50</div>
      </div>
      <div class="tournament">
        <div class="title">Sunday Million Arena. Unlimited participants</div>
        <div class="fund">15/06/2022</div>
        <div class="buyin">$100</div>
      </div>
    </div>
  </div>`
  event.preventDefault()
}

const winners = document.getElementById('winners') 
winners.addEventListener('click', winnersEvent)

function winnersEvent(event) {
  container.innerHTML = `<div>
  <div class="tabName">Winners Leaderboard</div>
    <div class="content">
      <div class="head">
        <a href="" id="title">Player</a>
        <a href="" id="fund">Registered</a>
        <a href="" id="buyin">Total </a>
      </div>
      <div class="tournament">
        <div class="title">Johny</div>
        <div class="fund">24/03/2022</div>
        <div class="buyin">$50</div>
      </div>
      <div class="tournament">
        <div class="title">Mandy</div>
        <div class="fund">12/02/2022</div>
        <div class="buyin">$30</div>
      </div>
      <div class="tournament">
        <div class="title">Bob</div>
        <div class="fund">03/12/2021</div>
        <div class="buyin">$50</div>
      </div>
      <div class="tournament">
        <div class="title">The Rock</div>
        <div class="fund">15/06/2022</div>
        <div class="buyin">$100</div>
      </div>
    </div>
  </div>`
  event.preventDefault()
}

const amenu = document.getElementById('amenu')

const aname = document.getElementById('aname')
aname.addEventListener('click', (event) => {
  if (amenu.classList[0] === 'visible') {
    amenu.classList.remove('visible')
  } else {
    amenu.classList.add('visible')
  }


  event.preventDefault()
})

