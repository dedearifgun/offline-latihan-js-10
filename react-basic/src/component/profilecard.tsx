type ProfileCardProps = {
  nama: string;
  alamat: string;
  hobi: string;
};

const ProfileCard = () => {
  const nama = "Super Dede";
  const alamat = "Bandung";
  const hobi = "Bermain Gitar";

  return (
    <div className="card">
      <p>Nama: {nama}</p>
      <p>Alamat: {alamat}</p>
      <p>Hobi: {hobi}</p>
    </div>
  );
};

export default ProfileCard;