(async () => {
    const baseURL = 'https://yb.cmcdn.com/yearbooks/X/X/X/X/00000000000000000000000000000000/XXXX/'; // Change this to your base URL. 
    const pages = 10; // Change this to the number of images the yearbook contains. 

    for (let i = 1; i <= pages; i++) {
        const imageUrl = `${baseURL}${String(i).padStart(4, '0')}.jpg`;
        
        try {
            const imageResponse = await fetch(imageUrl);
            if (imageResponse.ok) {
                const blob = await imageResponse.blob();
                const url = URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = url;
                a.download = `${String(i).padStart(4, '0')}.jpg`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                console.log(`Downloaded: ${String(i).padStart(4, '0')}.jpg`);
            } else {
                console.log(`Failed to download: ${String(i).padStart(4, '0')}.jpg`);
            }
        } catch (error) {
            console.error(`Error fetching image: ${error}`);
        }
    }
})();
