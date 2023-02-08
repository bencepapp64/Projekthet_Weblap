import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import mainkep from './img/main.jpg'
=======
>>>>>>> 4d92c127cc7d95fec3aabdbe74fe18c87cc6057a
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <div class="main">
          <h1>Projekt hét</h1>
          <div class="csapat">
            <h3>Csapattagok:</h3>
            <ul>
              <li>Magyar Tibor Dániel</li>
              <li>Papp Bence</li>
              <li>Szabó Dániel Márk</li>
              <li>Szabó Gergely</li>
            </ul>
          </div>
        </div>
        <div class="datamain">
          {/*HÁLÓZAT*/}
          <h2>Hálózat:</h2>
          <img src={mainkep} />
          <p>- Probléma forrás: elméleti alapok hiánya HSRP-vel kapcsolatban<br/>
              - Topológia kiépítése, struktúra kialakítása <br />
              - RS3-as tananyagok beleépítése (EIGRP, HSRP, LinkA) <br /> 
              - Minden eszköz Host neve megadva.
          </p>
            
          <p>
            - R1 és R2 routerek ellátva megfelelő IP címekkel, <br />
            - Rendelkeznek EIGRP forgalomirányító protokollokkal, továbbá EIGRP hitelesítéssel. <br />
            - R1 és R2 routerek HSRP-vel vannak ellátva. <br />
            - R2 routeren VPN lett beállítva. 
          </p>
          <p>
            - SW1 és SW2-n felügyeleti VLAN lett beállítva a megfelelő IP címekkel és átjárókkal <br />
            - SW1 és SW2 ellátva Link Aggregációval, LaCP 1-es móddal, trönkölve vannak a portok <br />
            - Srv1 és PC0 megkapták a szükséges IP címeket. <br />
            - A SOHO routeren kialakítva lett a külső illetve belső hálózat. <br /> 
            - A SOHO routeren SSID és WPA2-es hitelesítés lett beállítva. 
          </p>
          <h4>Tesztelés:</h4>
          <p>
          - Srv1 eléri az R1-et (ping) <br />
          - PC0 eléri a R2-t (ping) <br />
          - SOHO router eléri az R1 és R2 routerek (ping) <br /> 
          - A laptop kommunikál a SOHO routerrel <br />
          - A laptop eléri az Srv1-et. (ping) <br />
          - Az R1 eléri az R2-t (ping) <br />
          - PC0 csatlakozik az R2 VPN kiszolgálóhoz. 
          </p>
          <p>
          - UTP kábelek készítése  (img) <br />
          - Eszközök konfigurációjának megkezdése & <br />
          - Eszközök csatlakoztatása a topológiának megfelelően <br />
          - Telneten keresztül el lehet érni minden eszközt, A 3 switchet, a 2 routert és az AP-t. <br />
          </p>

          {/*WINDOWS SZERVER*/}
          <h2>Windows szerver:</h2>
          <p>
            - Az egyszerűség kedvéért virtualboxban oldottuk meg a szerver kérdését <br />
            - Windows Server 2019-et használtunk a feladat megvalósításához <br />
            - Telepítettünk egy IIS-t FTP-vel (amit biztonságos bejelentkezéssel tettünk elérhetővé), telepítettünk mellé egy DNS kiszolgálót. <br />
            - Nehézségek: <br />
            <ul>
              <li>Először távoli szerverrel akartuk megoldani, hogy működjön, majd elvetettük az ötletet, hogy a rendszergazdákat ne kelljen a portnyitási kérésekkel bombázni.</li>
              <li>Szóval a feladatot kis környezetben, a konfigolt eszközökkel, globális hálózat nélkül valósítottuk meg.</li>
            </ul>
            - Az Active Directory telepítése még (02.08, 17:19) nem kezdődött meg, mert az újratervezés miatt ez egy újabb ötlet volt <br />
            - Ebben az időpontban működik a DNS kiszolgáló, az FTP szerver és az IIS is. 
          </p>
          {/*LINUX SZERVER*/}
          <h2>Linux szerver</h2>
          <p>
            - Újratervezés keretein belül jött létre az ötlet, hogy a DHCP kiszolgálónak egy linux szervert kellene üzemeltetni SSH eléréssel. <br />
            - Ennek megvalósítása még (02.08, 17:19) nem kezdődött meg. <br />
            - A címeket a 150.15.0.0/25 hálózatból fogja kiosztani, fix címet csak a Linux a Windows szerver és a routerek fognak kapni. <br />
            - Nehézségek: <br />
            <ul>
              <li>Ubuntu szervert használunk, és nagyon sok beállítás nem ott van, mint a Debian disztribúción, sok internetes keresés kell ahhoz, hogy egy problémát meg tudjunk oldani</li>
            </ul>
          </p>
          {/*PROGRAMOZÁS*/}
          <h2>Programozás</h2>
          <p>
            - A weblap felépítését kitaláltuk, megbeszéltük, hogy mi lesz a környezet, amiben megvalósítjuk a projektünket. <br />
            - Bence és Dani Márk elkezdte a környezetet megteremteni. A projektet Vite + React-tal oldottuk meg <br />
            -	Az adatbázis SQL light alapon futtatjuk és a weboldalra a login az adatbázisban tárolt felhasználónevekkel és jelszavakkal történik
          </p>


          {/*TODO*/}
          <h2>Teendők: </h2>
          <h4>Hálózat:</h4>
          <ul>
            <li>Hálózati eszközök beszerzése</li>
            <li>Ezen eszközök konfigurálása, hogy első körben telnettel el tudjuk érni őket</li>
            <li>HSRP konfigurálás</li>
            <li>Link Aggregáció konfigurálása</li>
            <li>EIGRP konfigurálása</li>
            <li>VPN beállítása</li>
            <li>Portbiztonság beállítása</li>
            <li>Teszt</li>
          </ul>
          <h4>Windows szerver:</h4>
          <ul>
            <li>WinServer19 telepítése</li>
            <li>Felhasználó létrehozása minden tagnak</li>
            <li>DNS, IIS, FTP telepítése</li>
            <li>DNS hatókör beállítása (liquidmasters.hu)</li>
            <li>A szerver hatókörhöz való csatlakoztatása</li>
            <li>IIS beállítása (Alapértelmezett dokumentum, kötések, hozzáférés)</li>
            <li>FTP beállítása (Felhasználók elszigetelése, hozzáférés)</li>
            <li>AD beállítása</li>
            <li>Teszt</li>
          </ul>
          <h4>Linux szerver:</h4>
          <ul>
            <li>Ubuntu Server letöltése, telepítése</li>
            <li>Felhasználók létrehozása</li>
            <li>Fix IP beállítása</li>
            <li>SSh szerver telepítése</li>
            <li>DHCP szerver telepítése</li>
            <li>Teszt</li>
          </ul>
          <h4>Weboldal:</h4>
          <ul>
            <li>Futtatókörnyezet telepítése, beállítása</li>
            <li>A megbeszéltek alapján a web struktúrájának kialakítása</li>
            <li>SQL adatbázis létrehozása, felhasználók felvétele oda</li>
            <li>A backend gondos megírása</li>
            <li>Frontend fejlesztése</li>
            <li>Teszt</li>
          </ul>
        </div>
        <footer>
          <p>Minden jog fenttartva! &copy;</p>
        </footer>
      </div>

    



    </div>
  )
}

export default App
