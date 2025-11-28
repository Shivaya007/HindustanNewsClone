export default function LoadingState() {
  return (
    <div className="py-10 text-center">
      <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto" />
      <p className="mt-4 text-muted-foreground">लोड हो रहा है...</p>
    </div>
  );
}
