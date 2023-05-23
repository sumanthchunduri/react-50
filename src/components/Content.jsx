import styled from "styled-components";

export default function Content() {
  return (
    <>
      <MainPara>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        praesentium nobis? Minima accusantium ad autem. Libero, impedit amet!
        Aut veniam repellat aperiam vitae cupiditate autem vel adipisci, itaque
        nisi? Ipsum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Maiores numquam quaerat consectetur animi laudantium in cumque veniam
        eaque. Soluta quas dolorum, voluptatem excepturi facere omnis id in
        nulla dolore recusandae? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quia minima ab, dolores enim labore tenetur provident
        adipisci pariatur voluptas voluptatem similique libero voluptatibus modi
        inventore, architecto, cumque odit voluptate nostrum. Consectetur eos
        voluptas exercitationem, tempore reiciendis saepe architecto rem
        temporibus necessitatibus recusandae neque soluta atque officiis eaque
        similique, maiores eius nesciunt voluptate esse facere non fugiat. Quo
        necessitatibus dolorem assumenda. Hic iusto, animi omnis alias dolores
        beatae architecto quae impedit iure debitis doloribus perferendis nobis
        voluptate blanditiis repellendus labore, nisi veniam aut placeat
        excepturi. Deserunt obcaecati sit nisi neque aut. Et, quo? Sint nostrum
        officiis quibusdam, quisquam reprehenderit soluta perspiciatis iste
        laudantium nemo aut in dicta voluptate expedita saepe voluptatum rerum
        praesentium nobis error pariatur, ea delectus tempora consectetur
        tempore. Commodi consequatur doloribus corrupti, explicabo ex laboriosam
        rerum asperiores deserunt dignissimos eos voluptatem tempore, quasi quos
        illo tempora modi? Aliquid animi maxime vitae adipisci in eligendi
        impedit praesentium fuga sapiente?
      </MainPara>
    </>
  );
}

const MainPara = styled.p`
  display: grid;
  place-content: center;
  padding: 1.5rem clamp(1rem, 5%, 3rem);
`;
