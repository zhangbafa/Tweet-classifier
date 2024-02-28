export default async function Analytics(){
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return (
        <div style={{background:'#666',fontSize:'16px',height:'120px'}}>
            @analytics-page.tsx
        </div>
    )
}

