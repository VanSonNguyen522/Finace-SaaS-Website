import { Header } from "@/components/header";

type Pros = { 
    children: React.ReactNode
};

const DashboardLayout = ({ children }: Pros) => {
    return (
        <div>
            <Header />
            <main className="px-3 lg:px-14">
                { children }
            </main>
        </div>
    );
}

export default DashboardLayout