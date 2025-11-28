export default function ErrorState({ message }: { message: string }) {
  return (
    <div className="py-10 text-center">
      <p className="text-red-500 font-medium">{message}</p>
      <p className="text-muted-foreground mt-1">
        कृपया बाद में पुनः प्रयास करें।
      </p>
    </div>
  );
}
