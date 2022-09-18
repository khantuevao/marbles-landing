addEventListener('DOMContentLoaded', (event) => {
  live.click()
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

