interface PortfolioEntry {
    name: string;
    description: string;
    url?: string; // Where can we visit the project
    prefixHeader?: string; // A header describing the techstack or another note of the project
    startDate?: string; // Unix timestamp when the project / employment started
    endDate?: string;
    location?: string; // Example: Eindhoven3
    type: 'project' | 'study' | 'work' | 'experience';
}

export default PortfolioEntry;
