import "./Codex.css";
export default function Codex() {
  return (
    <div className="codex">
      <header>
        <h1>The Book of Thrones</h1>
        <p>The Warlock's Codex of the Seven-Part Pact</p>
        <p>Draft 3.24.9.2 (September 2024)</p>
      </header>
      <section>
        <h2>Part I: The Warlock</h2>
        <p>
          Behold the Warlock, known as the Keeper of the Throne, Blade-Bearer,
          and the Furious Lord of Lords. He is the oath-sworn Wizard of the
          Ishanian King, who acts on behalf of the crown of Isha to ensure the
          stability of power across the archipelago. He is oft of an honorable
          and harsh temperament, and he is governed by the planet Mars and the
          metal Iron. It is said the first Warlock was the King's oath-bound
          court Wizard, and the love shared between the two was only marred by
          their vicious betrayal. He is the only Wizard of the Seven-Part Pact
          empowered to commit violence against an errant wizard, and thus he is
          known as the Pact's Executioner.
        </p>
        <p>
          Within this Part of The Book of Thrones, you will be prompted with a
          number of choices to make on behalf of your Wizard. Should your
          answers ever change, or your Wizard grow beyond your original image of
          him, your Elements should change as well.
        </p>
        <section>
          <h3>Humour & Temperament</h3>
          <p className="question">
            The four Elements govern your relationship with magic, and these
            Elements are governed by your relationship with the world. Mark down
            which path best describes you, and increase the corresponding
            Elemental Circle.
          </p>
          <ul>
            <li>
              One of the many noble clans of Isha claims you as a member of
              their family. Were you your father's favorite child (+1 Earth) or
              the black sheep of the family (+1 Air)?
            </li>
            <li>
              As a member of the nobility, it is expected for you to possess
              tremendous wealth. Are you frugal and austere (+1 Earth) or do you
              spend lavishly on that which appeals to you (+1 Water)?
            </li>
            <li>
              You are a warrior on behalf of the King, and have thus fought in
              battle. Within your own mind, are you a chivalrous hero and
              adventurer (+1 Water) or a brutal executioner (+1 Air)?
            </li>
            <li>
              The King commands you to murder an innocent woman, who begs for
              your mercy. Do you save her life and hide her away (+1 Water) or
              follow his commands despite your misgivings (+1 Fire)?
            </li>
            <li>
              You serve two masters, and are caught between your loyalties.
              Which do you value more: the King (+1 Air) or the Pact (+1 Fire)?
            </li>
            <li>
              You have killed a man before. When you close your eyes and
              remember, do you feel proud (+1 Fire) or guilty (+1 Earth)?
            </li>
          </ul>
          Your fragment of the Seven-Part Pact is a blade, but in your hands it
          may take another form:
          <ul>
            <li>
              A regal broadsword, engraved with an oath of power, which may
              burst into flames at your will. (+1 Fire)
            </li>
            <li>
              A shining longbow, carved with glorious depictions of warriors
              past, and always nocked with an arrow. (+1 Air)
            </li>
            <li>
              A cruel ax, heavy with blood and executions past, which no man but
              you may lift. (+1 Earth)
            </li>
            <li>
              Twin cutlasses, one white as bone and the other black as night,
              well-versed in naval combat. (+1 Water)
            </li>
          </ul>
          <section>
            <p>
              You have a familiar who accompanies you in your magic, and who
              accompanies you when you charge into battle. They are:
            </p>
            <ul>
              <li>
                A glorious stallion, with iron hooves and a flowing mane. (+1
                Fire)
              </li>
              <li>
                A powerful hawk, with violent talons and a piercing call. (+1
                Air)
              </li>
              <li>
                A growling mastiff, with dull eyes and drooling jaws. (+1 Earth)
              </li>
              <li>
                A playful ermine, with beautiful fur and tiny sharp teeth (+1
                Water)
              </li>
              <li>
                (Or another animal, who provides +1 to an Element of your
                choice)
              </li>
            </ul>
          </section>
        </section>
        <section id="history-and-secrets">
          <h3>History & Secrets</h3>
          <p className="question">
            There was another Wizard before you, your old master who taught you
            the practice of malison, and in many ways was a father for you. How
            did he teach you, and what became of him? Choose 1 which is known to
            all and 1 which you harbor in secret.
          </p>
          <ul>
            <li>
              He was a popular and gregarious noble, who knew how to inspire
              largesse in all who knew him, including you. He passed away
              choking on a bone during a feast, or some similar uneventful and
              unremarkable death.
            </li>
            <li>
              He was the last of an older kind of hero, a chivalrous knight who
              raised you on stories of adventure and codes of honor. He was
              killed by a wild boar during a hunting expedition, a great tragedy
              that all of Isha mourned.
            </li>
            <li>
              He was a monstrous tyrant, finding pleasure from the misery of
              others, and who taught you both to inflict violence on others and
              to suffer it. He died while fighting against one of the great foes
              of the Pact, or perhaps another Wizard.
            </li>
            <li>
              He was a greedy craven coward, who played Isha's politics to
              maintain his authority, and who taught you the violence of lies
              and manipulation. You killed him yourself, and it brought you no
              small pleasure to do so.
            </li>
            <li>
              He was the hound of his betters, and served both the king and the
              Pact with obedient fury, teaching you to do the same. He died the
              way all violent dogs do — someone had to finally put him down.
            </li>
            <li>
              You never met the former Warlock, as you were chosen by the King
              and the Pact working together to fill a vacant seat. You learned
              much from the agony of trying to fill his shoes.
            </li>
            <li>
              You learned your magic amid the politics and tutors of the court,
              and you have the scars to prove it. You needed no master to teach
              you the art of violence.
            </li>
          </ul>
          <p>
            The one scarcity all Wizards share is time. Wizards discuss their
            age in scores, periods of twenty years that shape their long and
            wizened lives. How old are you, and what is expected of you in your
            age?
          </p>
          <ul>
            <li>
              You are just a boy, far too young to assume the mantle of Warlock,
              but the sudden death of your old master and the demands of the
              King forced you to take on power beyond your years.
            </li>
            <li>
              You are a young fellow, not yet two scores old, and it is expected
              for you to already be betrothed to another noble's daughter, and
              for you to have engaged in your first duel.
            </li>
            <li>
              You are of a middling age, between two and three scores old, and
              you are expected to be married, and to have fathered at least one
              child.
            </li>
            <li>
              You are of a proper age, between three and four scores old, and
              you are expected to have led a campaign of war, and to have taken
              many lives.
            </li>
            <li>
              You are of a great age, between four and five scores old, and you
              are expected to be the patriarch of your clan, and to be among the
              oldest and wisest within court.
            </li>
            <li>
              You are at least a century old, older than the king, and it is
              expected for you to be dead by now, and everyone at court is
              waiting hungrily for your passing.
            </li>
            <li>
              You are far more than a century old, older than entire dynasties
              of Isha's rule, and you have become part of the architecture of
              the court, a single constant amid a sea of chaos.
            </li>
          </ul>
          <p>
            Magic changes those who work with it. Choose 1 change, and another 1
            for every score you've been alive:
          </p>
          <ul>
            <li>
              You can move as fast as falling rain, as fast as a hawk, as fast
              as a battlecry.
            </li>
            <li>
              You are as tall and broad as three men put together, and have the
              hunger of an army.
            </li>
            <li>
              An extra pair of arms burst from your shoulders, strong enough to
              lift mountains.
            </li>
            <li>
              Your face contorts to resemble a war-mask, with fearsome eyes and
              tusks jutting from your lips.
            </li>
            <li>
              You can smell blood better than a hound, and you can smell in
              someone's sweat their fear and hate.
            </li>
            <li>
              A flaming ring burns above your head, which shines brighter in
              your anger and fury.
            </li>
            <li>Your blood is blue, and scalding for any who touch it.</li>
            <li>
              Armor grows from your skin, scales and plate etched with tales of
              your exploits.
            </li>
            <li>
              Multiple pairs of iron wings extend from your back, sharp enough
              to cut skin and strong enough to carry you through the air.
            </li>
            <li>
              When you rage your breath transforms into flames, and you may
              breathe fire the way a dragon might.
            </li>
            <li>
              A long barbed tail juts from your back, prehensile and dripping
              poison.
            </li>
            <li>
              Your teeth are sharpened to points and your tongue lolls from your
              mouth like a dog.
            </li>
            <li>You crave the taste of human flesh.</li>
          </ul>
          <section>
            <p className="question">
              You are a man, as all Wizards are. However within your heart you
              know:
            </p>
            <ul>
              <li>
                To be a man is to be a leader and dominate over others, and you
                are always at the beck and call of your master.
              </li>
              <li>
                To be a man is to be a chivalrous hero, and yet this world has
                no more room for heroes, and chivalry is an easy way to a
                pathetic death.
              </li>
              <li>
                Some deep-set part of you is repulsed by your maleness, and so
                you double down into a crueler and harsher version of
                masculinity.
              </li>
              <li>
                There is some part of you which is kind and caring and
                distinctly feminine, but you must guard that part of your heart
                from the violence of your job, and only show it to those closest
                to you.
              </li>
              <li>
                You were once a woman, but you had no choice but to kill that
                part of you, and reject the weakness of femininity in order to
                serve the King.
              </li>
              <li>
                No one dares speculate on your manhood. You would kill the next
                person to make such a claim in front of you.
              </li>
              <li>
                There is an even greater secret, which is for you and you alone.
              </li>
            </ul>
          </section>
          <section>
            <p className="question">
              Your name as a Wizard within the Seven-Part Pact is:
            </p>
            <ul>
              <li>
                A name taken from military history or from a great king of the
                past.
              </li>
              <li>A title bestowed upon you by the King himself.</li>
              <li>An honorific earned from your exploits in battle.</li>
              <li>A nickname picked up in the halls of the court.</li>
            </ul>
          </section>
        </section>
        <section>
          <h3>Might & Trappings</h3>
          <p>
            Through your Pact-Fragment, you may freely perform any of the
            following:
          </p>
          <ul>
            When casting a spell directly against an unwilling foe, or when
            casting any spell during Combat (as discussed during Part IV),
            consult an additional die. Interpret the presence of "⊖" (Salt) as
            "♂" (Mars). Murder any mortal who stands before you with a single
            strike of your Pact-Fragment, faster than they can react and with
            such certainty that none may dispute their death.
          </ul>
          <section>
            <p>
              Along with your Pact-Fragment, you possess 3 of the following
              Treasures. Pick which ones you inherited from your old master,
              which were gifted to you by the King for your service, and which
              you won in combat:
            </p>
            <ul>
              Armor forged from old mage-steel, scavenged up from beneath the
              seas, and strong enough to withstand any blow from a mundane
              weapon. A shield bearing a perfectly mirrored surface, and
              reflecting certain lesser magics back at those who seek you harm.
              A pair of greaves bearing feathery wings, such that when you
              strike them against the ground by your will, they lift you up into
              the air at a tremendous speed. A full set of chess pieces, who
              when commanded, will transform into soldiers and fight at your
              side until sunrise. An iron ring used in ancient days by torturers
              and soldiers amidst the Tragedies. Whoever wears it cannot die
              from any wound. One of the last dragon's eggs, rare beyond measure
              and warm to the touch. A beautiful locket on a delicate chain, the
              sort carried by soldiers on a long campaign, with enough room for
              a portrait of someone you long for.
            </ul>
          </section>
          <section>
            <p>
              Additionally, you are adept at the secret practices of malison,
              which grant you access to certain Humble Magics, cantrips which
              you may perform at any time through your will and without any
              incantation. They include:
            </p>
            <ul>
              <li>
                Perform a daring feat of physical athleticism which dazzles
                others' senses, leap into the air, or lift heavy stones which no
                one else could lift.
              </li>
              <li>
                Roar with a thunderous voice, or carry your voice across a
                battlefield, or act with the sounds of drums and horns at your
                steps, to motivate your troops or dismay others.
              </li>
              <li>
                Place both hands upon someone's shoulders, and in an instant
                divine whether they are an eligible heir for the bloodline of
                Isha's royalty.
              </li>
            </ul>
          </section>
          Finally, you carry the following possessions: A red silk robe, with
          iron clasps bearing the symbol of Mars. Three sets of clothes, at
          least: suitable for a wealthy nobleman, a general commanding an army,
          or a simple servant incognito amongst the court. Any materials
          necessary for the casting of magic, such as: arrowheads, golden coins,
          flowers, etc. Any accessibility aids or mobility tools, such as:
          glasses, a cane, painkillers, etc. This very Codex, filled with the
          notes of Warlocks past.
        </section>
      </section>
      <section>
        Appendix Written by Jay Dragon, with developmental editing from Mazey
        Veselak (@NightlingBug on Twitter). Temporary cover image from Guido
        Bonatti's Liber Astronomiae, via Wikimedia Commons. Compass Rose from
        Wikimedia Commons.
      </section>
    </div>
  );
}