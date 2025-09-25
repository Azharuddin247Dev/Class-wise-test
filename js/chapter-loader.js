// Dynamic Chapter Loading System
class ChapterLoader {
    constructor() {
        this.loadedChapters = new Map();
        this.loadingPromises = new Map();
    }

    // Load chapter data dynamically
    async loadChapter(classNum, chapterId) {
        const key = `class${classNum}chapter${chapterId}`;
        
        // Return cached data if already loaded
        if (this.loadedChapters.has(key)) {
            return this.loadedChapters.get(key);
        }

        // Return existing promise if already loading
        if (this.loadingPromises.has(key)) {
            return this.loadingPromises.get(key);
        }

        // Create loading promise
        const loadingPromise = this.loadChapterFile(classNum, chapterId);
        this.loadingPromises.set(key, loadingPromise);

        try {
            const chapterData = await loadingPromise;
            this.loadedChapters.set(key, chapterData);
            this.loadingPromises.delete(key);
            return chapterData;
        } catch (error) {
            this.loadingPromises.delete(key);
            throw error;
        }
    }

    // Load chapter file from separate class folders
    async loadChapterFile(classNum, chapterId) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `data/class${classNum}/chapter${chapterId}.js`;
            
            script.onload = () => {
                setTimeout(() => {
                    const chapterData = window[`class${classNum}Chapter${chapterId}`];
                    if (chapterData) {
                        console.log(`Loaded chapter data from file: class${classNum}/chapter${chapterId}.js`);
                        resolve(chapterData);
                    } else {
                        reject(new Error(`Chapter data not found in file for class ${classNum}, chapter ${chapterId}`));
                    }
                    document.head.removeChild(script);
                }, 100);
            };
            
            script.onerror = () => {
                document.head.removeChild(script);
                reject(new Error(`Failed to load chapter file: data/class${classNum}/chapter${chapterId}.js`));
            };
            
            document.head.appendChild(script);
        });
    }

    // Try loading from multiple paths
    tryLoadPaths(paths, index, classNum, chapterId, resolve, reject) {
        if (index >= paths.length) {
            reject(new Error(`All paths failed for class ${classNum}, chapter ${chapterId}`));
            return;
        }

        const script = document.createElement('script');
        script.src = paths[index];
        console.log(`Trying path ${index + 1}:`, script.src);
        
        script.onload = () => {
            console.log('Success:', script.src);
            setTimeout(() => {
                const chapterData = window[`class${classNum}Chapter${chapterId}`];
                if (chapterData) {
                    resolve(chapterData);
                } else {
                    reject(new Error(`Chapter data not found for class ${classNum}, chapter ${chapterId}`));
                }
            }, 50);
        };

        script.onerror = () => {
            console.log(`Failed path ${index + 1}:`, script.src);
            document.head.removeChild(script);
            this.tryLoadPaths(paths, index + 1, classNum, chapterId, resolve, reject);
        };

        document.head.appendChild(script);
    }

    // Get reading questions for a chapter
    async getReadingQuestions(classNum, chapterId) {
        const chapterData = await this.loadChapter(classNum, chapterId);
        return chapterData.reading || [];
    }

    // Get test questions for a chapter
    async getTestQuestions(classNum, chapterId) {
        const chapterData = await this.loadChapter(classNum, chapterId);
        return chapterData.test || [];
    }

    // Get broad questions for a chapter from separate file
    async getBroadQuestions(classNum, chapterId) {
        const key = `class${classNum}chapter${chapterId}broad`;
        
        // Return cached data if already loaded
        if (this.loadedChapters.has(key)) {
            return this.loadedChapters.get(key);
        }

        // Return existing promise if already loading
        if (this.loadingPromises.has(key)) {
            return this.loadingPromises.get(key);
        }

        // Create loading promise for broad questions
        const loadingPromise = this.loadBroadFile(classNum, chapterId);
        this.loadingPromises.set(key, loadingPromise);

        try {
            const broadData = await loadingPromise;
            this.loadedChapters.set(key, broadData);
            this.loadingPromises.delete(key);
            return broadData;
        } catch (error) {
            this.loadingPromises.delete(key);
            console.warn(`Broad questions not found for class ${classNum}, chapter ${chapterId}`);
            return [];
        }
    }

    // Load broad questions file
    async loadBroadFile(classNum, chapterId) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `data/class${classNum}/chapter${chapterId}-broad.js`;
            
            script.onload = () => {
                setTimeout(() => {
                    const broadData = window[`class${classNum}Chapter${chapterId}Broad`];
                    if (broadData && broadData.questions) {
                        console.log(`Loaded broad questions from: class${classNum}/chapter${chapterId}-broad.js`);
                        resolve(broadData.questions);
                    } else {
                        reject(new Error(`Broad questions not found in file`));
                    }
                    document.head.removeChild(script);
                }, 100);
            };
            
            script.onerror = () => {
                document.head.removeChild(script);
                reject(new Error(`Failed to load broad questions file`));
            };
            
            document.head.appendChild(script);
        });
    }

    // Check if chapter file exists
    async chapterExists(classNum, chapterId) {
        try {
            const chapterData = await this.loadChapter(classNum, chapterId);
            return chapterData && (chapterData.reading || chapterData.test);
        } catch (error) {
            return false;
        }
    }
    


    // Clear cache (useful for development)
    clearCache() {
        this.loadedChapters.clear();
        this.loadingPromises.clear();
    }
}

// Create global instance
window.chapterLoader = new ChapterLoader();
