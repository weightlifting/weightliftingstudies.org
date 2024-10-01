/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  weightliftingGuideSidebar: [
    'weightlifting-studies',
    {
      type: 'category',
      label: 'Learning Weightlifting',
      items: [
        'learning_weightlifting/learning-weightlifting',
        {
          type: 'category',
          label: 'Before Picking Up the Bar',
          items: [
            'learning_weightlifting/before_picking_up_the_bar/before-picking-up-the-bar',
            'learning_weightlifting/before_picking_up_the_bar/universal-fundamentals',
            'learning_weightlifting/before_picking_up_the_bar/warm-up'
          ],
        },
        {
          type: 'category',
          label: 'Technique',
          items: [
            'learning_weightlifting/technique/technique',
            'learning_weightlifting/before_picking_up_the_bar/universal-fundamentals',
            'learning_weightlifting/technique/how-to-snatch',
            'learning_weightlifting/technique/how-to-clean',
            'learning_weightlifting/technique/how-to-jerk',
            'learning_weightlifting/technique/putting-the-clean-and-jerk-together'
          ],
        },
        {
          type: 'category',
          label: 'Write a Training Plan',
          items: [
            'learning_weightlifting/write_a_training_plan/write-a-training-plan',
            'learning_weightlifting/write_a_training_plan/definitions',
            'learning_weightlifting/write_a_training_plan/training-principles'
          ]
        }
      ]      
    },
    {
      type: 'category',
      label: 'Studying Weightlifting',
      items: [
        'studying_weightlifting/question-001',
        'studying_weightlifting/question-002',
        'studying_weightlifting/question-003',
        'studying_weightlifting/question-004'
      ]
    },
    'about-the-author'
    /*,
    {
      type: 'category',
      label: 'Blog',
      items: [
        {
          type: 'category',
          label: '2025',
          items: [
            'blog/2025/post-001',
            'blog/2025/post-002',
            'blog/2025/post-003',
            'blog/2025/post-004',
            'blog/2025/post-005',
          ]
        },
        {
          type: 'category',
          label: '2024',
          items: [
            'blog/2024/post-001',
            'blog/2024/post-002',
            'blog/2024/post-003',
            'blog/2024/post-004',
            'blog/2024/post-005',
          ]
        }
      ]
    }
      */
  ]

};

export default sidebars;
