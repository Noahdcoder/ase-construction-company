type serviceListingProps = {
  id: string;
  title: string;
  description: string;
};

export default function ServiceListing({
  id,
  title,
  description,
}: serviceListingProps) {
  return (
    <div id={id}>
      <h2 className="py-2 text-3xl text-gray font-semibold">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );
}
