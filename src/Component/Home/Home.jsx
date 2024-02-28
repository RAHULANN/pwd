import React, { useEffect } from "react";
import Header from "../Header/Header";
import Industry from "../Industry/Industry";
import KeyFacts from "../KeyFacts/KeyFacts";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    document.getElementById("keyfacts").style.display = "none";
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        console.log(sectionHeight, sectionTop, window.pageYOffset);
        if (window.pageYOffset >= sectionTop - sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      if (current == "keyfacts") {
        document.getElementById("keyfacts").style.display = "";

        // document.getElementById("keyfacts").style.marginTop = "10px";
      }
      // setActiveLink(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Header />
      <div
        style={{
          marginTop: "100px",
        }}
      >
        <div> ytg </div>
        <section id="industry">
          <Industry />
        </section>

        <section id="para">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto vel quidem soluta distinctio hic similique veritatis
              quasi voluptatibus ipsa odio, rerum et minus. Esse fugiat sit unde
              natus facere commodi? Doloremque culpa totam sequi, aliquam eaque
              officiis, laboriosam, cupiditate quidem in quo perferendis ullam
              debitis iste sed libero! Eligendi nemo porro consectetur eos
              beatae id minima quibusdam magnam qui ad. Recusandae, ipsum,
              quaerat deleniti assumenda illum aperiam dolor culpa eaque, qui
              numquam soluta? Eum error ullam corporis a ipsa omnis at, facere
              eos dolorum laborum nam sapiente voluptatibus ipsam consequatur.
              Dolorem temporibus commodi, fugiat nulla ipsum vitae fugit, atque
              corrupti voluptate a esse est. Culpa cum repellendus quis
              obcaecati nemo fuga voluptas? Error cupiditate eveniet tempora
              commodi soluta, sapiente explicabo! Hic, qui tempore aliquid aut
              nihil officiis cum similique corporis vero eos, architecto
              veritatis minus iure dolorum, voluptatum inventore sed illo ea
              sunt autem numquam. Voluptas reiciendis iure cum asperiores!
              Soluta eveniet maxime nostrum, deleniti dolores, dolorum
              praesentium culpa harum voluptatem consectetur totam dolor sequi
              animi quis eos similique cupiditate facere porro? Commodi, culpa
              consectetur. Veniam temporibus quam nostrum voluptatibus. Maxime
              illo beatae, maiores sit facere recusandae eum ipsam perspiciatis
              ratione quasi nostrum modi, suscipit sed aliquid obcaecati?
              Asperiores illo nihil, quasi magnam accusamus vel alias laboriosam
              commodi quos facilis! A error possimus tenetur minus nemo quidem
              aperiam ad modi, nesciunt, assumenda officia quos cupiditate vero
              tempora praesentium quia eaque unde nulla fugiat aliquid, ipsum
              adipisci architecto. Praesentium, officiis ab. Saepe nam maiores
              dolor, unde, iste provident molestiae iusto dolores blanditiis
              consequatur doloribus illum quam itaque distinctio excepturi
              fugiat rem repellendus, obcaecati mollitia voluptate? Natus
              laboriosam veniam perspiciatis suscipit cumque. Id qui ipsum,
              ducimus nulla quis magni voluptatum impedit, omnis temporibus rem
              veritatis fuga delectus ipsa. Delectus dignissimos accusantium,
              mollitia necessitatibus vero fuga nesciunt voluptatum aliquam
              sequi quas et porro. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ipsum deserunt temporibus laborum iusto amet
              similique hic, architecto sit dolor sequi voluptates quisquam nam?
              Odio omnis explicabo maiores id quia eligendi? Quo suscipit cum
              culpa eius tempora consectetur eum, fugiat architecto natus, quos
              nulla sequi doloribus nihil quod incidunt exercitationem,
              asperiores voluptatum corrupti nam nisi nemo totam! Dignissimos
              aspernatur sint dolorem. Sit vitae quisquam ex veniam dolorem
              laudantium quidem, suscipit praesentium, repudiandae ipsam dicta,
              temporibus iusto a in odio nam recusandae quibusdam! Pariatur
              laborum est quisquam aut aperiam, earum temporibus corporis?
              Quibusdam ipsam, quasi commodi maiores velit ducimus perferendis
              rem natus id, voluptas corporis qui eveniet voluptatem dolorum
              veritatis cum inventore. Voluptate nostrum similique libero
              eligendi est, ab minima alias rem. Perferendis minus cupiditate ut
              enim voluptatibus minima quaerat aliquid id consequuntur laborum,
              architecto dignissimos eveniet? Id dicta numquam, totam ipsam,
              delectus ad labore eum incidunt fugit saepe non earum fugiat? Odio
              aliquam iste recusandae adipisci et nesciunt incidunt enim
              inventore quasi molestiae modi aliquid libero accusantium fugiat
              repellat, itaque omnis, temporibus perferendis magni cupiditate
              officia similique laborum expedita. Iusto, nulla. Delectus illum
              repellat nisi, inventore enim quidem voluptate quia quisquam autem
              id tempora rerum, facilis nulla suscipit placeat nam? Ea
              necessitatibus voluptatem sit ex itaque deserunt libero sapiente
              laboriosam quae? Aliquam eum officia earum in itaque architecto
              quidem quod optio neque sit, repudiandae quasi magnam autem
              reiciendis minus reprehenderit et adipisci. Dolor illum, ullam
              porro sed totam molestias dolore earum. Ullam aut voluptas, animi
              vel voluptates odio dicta natus. Accusantium dicta vel autem nihil
              quos cumque facilis et incidunt doloribus! Quod quibusdam animi
              perferendis, nam laborum amet ex dolor consequatur. Non, quia
              provident. Ducimus laboriosam nulla dignissimos consequatur
              corrupti, adipisci enim suscipit ad quis ipsum corporis excepturi
              consectetur, illum eius laudantium incidunt hic voluptatem,
              asperiores esse alias perferendis reprehenderit fugit? Nam
              quibusdam incidunt architecto molestiae voluptatibus quam vitae
              sed perferendis doloribus rem. Rerum quibusdam saepe cumque
              quisquam! Accusamus ducimus molestias dolorem. Labore ipsa hic
              optio enim natus beatae, dolor consectetur? Molestias illo,
              voluptas nulla reiciendis dolorem ex! Provident, accusantium id
              ullam nostrum doloremque sed illum esse sapiente culpa dolor
              eveniet maxime ipsum suscipit quos cupiditate nesciunt quam
              reprehenderit, recusandae tempora! Facilis, ipsam quas placeat
              excepturi provident quidem debitis sunt! Aliquid ad exercitationem
              delectus vitae eius? Officiis, soluta. Omnis fugit placeat
              excepturi ad, neque aliquam provident facere, deserunt nobis
              delectus labore. Consectetur, delectus dolorem. Asperiores
              consectetur assumenda a. Odit iste obcaecati at placeat qui neque
              officia animi blanditiis eaque doloribus et distinctio veniam,
              fugit incidunt quis sequi. Et aliquid ea provident.
              Necessitatibus, natus! Nostrum necessitatibus ab at, illo totam
              quod voluptas non, perspiciatis illum aliquid error omnis, quae id
              eius quisquam perferendis et quas. Eaque, quibusdam sint.
              Doloremque, quod assumenda. Tempore. Aperiam optio totam placeat
              quod eos quam quaerat cupiditate libero animi voluptates. Velit
              repellat quis atque, at, rerum, adipisci a necessitatibus ex
              suscipit voluptatibus commodi magnam animi vitae illum quaerat.
              Dolorum perferendis, ipsa enim consequuntur iusto placeat
              recusandae ducimus corporis mollitia voluptate rem quasi quo porro
              fugit! Amet non facere recusandae dolores fugit vel, quod et
              consectetur at beatae neque. Vel fugiat maxime praesentium
              officiis! Laboriosam, voluptatem ipsam. Qui facere, dicta
              repudiandae at, iure suscipit harum tenetur minus voluptas sequi
              quod odit nulla vitae ipsam pariatur similique aperiam cupiditate
              autem? Dolorum tempore possimus provident saepe iusto? Aliquam qui
              quibusdam, eligendi placeat molestiae facilis similique dolorum
              quia. Aliquam adipisci doloremque quo harum. Assumenda incidunt,
              totam qui iste consectetur rem non. Ex? Consequuntur voluptatem
              odio sint expedita, cupiditate id mollitia facere ipsa repellat
              accusantium eligendi adipisci accusamus dolorum, tenetur hic
              distinctio, velit voluptatibus praesentium magni voluptas!
              Reiciendis nostrum nobis est vitae odit.
            </p>
          </div>
        </section>

        <section id="keyfacts">
          <KeyFacts />
        </section>

        <div> asfdjafkjdsgfjds</div>
      </div>
    </div>
  );
}
