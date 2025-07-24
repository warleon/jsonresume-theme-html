/* Compact Resume Layout - Proximity Design Principles */
export const css = `
:root {
  --color-background: #ffffff;
  --color-dimmed: #f3f4f5;
  --color-primary: #191e23;
  --color-secondary: #6c7781;
  --color-accent: #0073aa;

  --scale-ratio: 1.2;
  --scale0: 0.875rem;
  --scale1: calc(var(--scale0) * var(--scale-ratio));
  --scale2: calc(var(--scale1) * var(--scale-ratio));
  --scale3: calc(var(--scale2) * var(--scale-ratio));
  --scale4: calc(var(--scale3) * var(--scale-ratio));
  --scale5: calc(var(--scale4) * var(--scale-ratio));
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}



html {
  font-size: 12px;
}

body {
  background: var(--color-background);
  color: var(--color-primary);
  max-width: 210mm;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.masthead {
  > article {
    margin-bottom: 0.5rem;
  }
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.5rem ;
  flex-wrap: wrap;
  justify-content: center;
  > li {
    display: flex;
    text-wrap: nowrap;
  }
}

section {
  > .stack {
    margin-left: 1rem;
  }
}

article {
  > header {
    display: flex;
    > .meta{
      display: flex; 
      gap: 0.25rem;
      &::before{
        content: ":";
      }
    }
  }
  > .timeline {
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > div {
      > div:first-child {
        display: flex;
        > .meta{
          display: flex;
          gap: 0.25rem;
          &::before{
            content: ":";
            margin-right: 0.25rem;
          }
        }
      }
      > p {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
      }
      > ul {
        justify-content: flex-start;
        gap: 0;
        > li {
          &::before {
            content: "•";
            margin-right: 0.25rem;
          }
        }
      }
    }
  }
}

`
