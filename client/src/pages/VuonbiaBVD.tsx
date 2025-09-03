import { useParams } from "wouter";

export default function LocationDetail() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Chi nhánh: {slug}</h1>
      <p>Thông tin chi tiết chi nhánh sẽ hiển thị ở đây.</p>
    </div>
  );
}
