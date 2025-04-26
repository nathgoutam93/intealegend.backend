import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StatementPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statement</CardTitle>
        <CardDescription>
          View your account statements and transaction history.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">No statements available</h3>
          <p className="text-muted-foreground max-w-md">
            You don't have any statements available at the moment. Your
            statements will appear here once they are generated.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
