<script>
    import { Accordion, AccordionItem, Button, Column, Grid, Row, Tag } from 'carbon-components-svelte';
    import Cut from "carbon-icons-svelte/lib/Cut.svelte";
</script>

<h3>Slots</h3>
<Accordion align='start' size="xl">
    <AccordionItem title="Natural Language Classifier" open>
    <svelte:fragment slot="title">
        <h4>V921GPHFE</h4>
        <div>
          <Tag type="outline">(slot) 0/0</Tag>
          <Tag type="green">
            Normal
          </Tag>
        </div>
    </svelte:fragment>
      <p>
        Natural Language Classifier uses advanced natural language processing and
        machine learning techniques to create custom classification models. Users
        train their data and the service predicts the appropriate category for the
        inputted text.
      </p>
    </AccordionItem>
    <AccordionItem title="Natural Language Understanding" disabled>
      <svelte:fragment slot="title">
        <h4>V921GPHFE</h4>
        <div>
          <Tag type="outline">0/1</Tag>
          <Tag type="green">
            Normal
          </Tag>
        </div>
    </svelte:fragment>
    </AccordionItem>
    <AccordionItem title="Language Translator" disabled>
      <svelte:fragment slot="title">
        <h4>V921GPHFE</h4>
        <div>
          <Tag type="outline">0/2</Tag>
          <Tag type="green">
            Active_normal
          </Tag>
        </div>
    </svelte:fragment>
    </AccordionItem>
  </Accordion>