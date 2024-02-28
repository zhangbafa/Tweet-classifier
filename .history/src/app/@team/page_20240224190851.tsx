export default async function Team(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div style={{background:'green',fontSize:'12px;height: 100px'}}>
            @team-page.tsx
        </div>
    )
}

