type ProfileCardProps = {
  nama: string;
  alamat: string;
  hobi: string;
};

const ProfileCard = () => {
  const nama = "Super Dede";
  const alamat = "Kampung Durian Runtuh";
  const hobi = "Makan, Tidur";

  return (
    <div className="card">
      <p>Nama: {nama}</p>
      <p>Alamat: {alamat}</p>
      <p>Hobi: {hobi}</p>
    </div>

  );
};



export default ProfileCard;